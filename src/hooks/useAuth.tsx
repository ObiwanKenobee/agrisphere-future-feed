
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { AuthState, UserProfile } from '@/types/auth';

interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (email: string, password: string, metadata?: Record<string, any>) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<{ error: Error | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [state, setState] = useState<AuthState>({
    session: null,
    user: null,
    loading: true,
    error: null,
  });

  // Fetch user profile
  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching user profile:', error);
        return null;
      }

      return data as UserProfile;
    } catch (error) {
      console.error('Error in fetchUserProfile:', error);
      return null;
    }
  };

  useEffect(() => {
    // Check for existing session first
    const initializeAuth = async () => {
      try {
        // Check current session
        const { data: { session } } = await supabase.auth.getSession();
        
        // Set initial session state
        setState(prevState => ({
          ...prevState,
          session,
          loading: session ? true : false, // Keep loading if we have a session and need to fetch profile
        }));

        // If we have a session, fetch the user profile
        if (session?.user) {
          const userProfile = await fetchUserProfile(session.user.id);
          if (userProfile) {
            setState(prevState => ({
              ...prevState,
              user: userProfile,
              loading: false,
            }));
          } else {
            setState(prevState => ({
              ...prevState,
              loading: false,
              error: 'Failed to load user profile',
            }));
          }
        }

        // Set up auth state change listener
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
          async (event, session) => {
            setState(prevState => ({
              ...prevState,
              session,
              loading: session ? true : false,
              user: session ? prevState.user : null,
            }));
            
            // Fetch profile on auth change if we have a session
            if (session?.user) {
              // Using setTimeout to avoid potential Supabase auth deadlocks
              setTimeout(async () => {
                const userProfile = await fetchUserProfile(session.user.id);
                setState(prevState => ({
                  ...prevState,
                  user: userProfile,
                  loading: false,
                }));
              }, 0);
            } else {
              setState(prevState => ({
                ...prevState,
                loading: false,
              }));
            }

            // Handle sign out
            if (event === 'SIGNED_OUT') {
              navigate('/auth');
            }
          }
        );

        // Clean up subscription on unmount
        return () => {
          subscription.unsubscribe();
        };
      } catch (error) {
        console.error('Error initializing auth:', error);
        setState({
          session: null,
          user: null,
          loading: false,
          error: 'Failed to initialize authentication',
        });
      }
    };

    initializeAuth();
  }, [navigate]);

  // Sign in with email and password
  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (!error) {
        navigate('/dashboard');
      }
      return { error };
    } catch (error) {
      console.error('Sign in error:', error);
      return { error: error as Error };
    }
  };

  // Sign up with email, password, and optional metadata
  const signUp = async (email: string, password: string, metadata = {}) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata,
        },
      });
      if (!error) {
        navigate('/auth/verification');
      }
      return { error };
    } catch (error) {
      console.error('Sign up error:', error);
      return { error: error as Error };
    }
  };

  // Sign out
  const signOut = async () => {
    await supabase.auth.signOut();
    navigate('/auth');
  };

  // Update user profile
  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!state.user?.id) {
      return { error: new Error('User not authenticated') };
    }

    try {
      const { error } = await supabase
        .from('user_profiles')
        .update(updates)
        .eq('id', state.user.id);

      if (!error) {
        // Update local state with new profile data
        setState(prevState => ({
          ...prevState,
          user: { ...prevState.user!, ...updates }
        }));
      }

      return { error };
    } catch (error) {
      console.error('Error updating profile:', error);
      return { error: error as Error };
    }
  };

  const value = {
    ...state,
    signIn,
    signUp,
    signOut,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
