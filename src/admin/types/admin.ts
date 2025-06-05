export interface Admin {
  _id: string;
  email: string;
  password: string;
  name: string;
  role: "SUPER_ADMIN" | "ADMIN";
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminLoginCredentials {
  email: string;
  password: string;
}

export interface AdminCreateInput {
  email: string;
  password: string;
  name: string;
  role: "SUPER_ADMIN" | "ADMIN";
}

export interface AdminResponse {
  _id: string;
  email: string;
  name: string;
  role: "SUPER_ADMIN" | "ADMIN";
  createdAt: Date;
  updatedAt: Date;
}
