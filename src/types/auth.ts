
export type UserRole = "farmer" | "admin" | "planner";

export interface UserProfile {
  id: string;
  role: UserRole;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Session {
  user: {
    id: string;
    email: string;
    user_metadata: {
      role?: UserRole;
      full_name?: string;
    };
  } | null;
}

export interface AuthState {
  session: Session | null;
  user: UserProfile | null;
  loading: boolean;
  error: string | null;
}
