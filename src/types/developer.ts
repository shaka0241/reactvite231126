// Unión de literales: solo se admiten estos tres valores para el rol.
export type Role = "Frontend" | "Backend" | "Full Stack";

// Define la forma que deben cumplir los objetos que representan desarrolladores.
export interface Developer {
  // Identificador numérico utilizado, entre otras cosas, como key en la lista.
  id: number;
  // Datos de texto que se muestran en la tarjeta.
  name: string;
  role: Role;
  // Array de tecnologías y estado booleano de disponibilidad.
  skills: string[];
  available: boolean;
}
