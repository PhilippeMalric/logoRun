export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName: string;
  loading?:    boolean;
  error?:      string;
}

export class User implements User {
  constructor(public uid: string, public displayName: string,public email: string ) {}
}
