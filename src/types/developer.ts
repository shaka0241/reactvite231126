export type Role = "Frontend" | "Backend" | "Full Stack";

export interface Developer {
  id: number;
  name: string;
  role: Role;
  skills: string[];
  available: boolean;
}
