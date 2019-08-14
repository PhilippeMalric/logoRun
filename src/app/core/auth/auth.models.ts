export interface AuthState {
  isAuthenticated: boolean;
  loading;
  uid? : string,
  displayName?: string;
  email?: string;
}
