// Usamos el tipo compartido para comprobar la estructura de los datos.
import type { Developer } from "../types/developer";

// Lista local de perfiles: cada objeto debe cumplir la interfaz Developer.
// available indica si la persona está disponible y skills recoge sus tecnologías.
export const developers: Developer[] = [
  {
    id: 1,
    name: "Laura Martínez",
    role: "Full Stack",
    skills: ["React", "Node.js", "TypeScript"],
    available: true,
  },
  {
    id: 2,
    name: "Carlos Gómez",
    role: "Backend",
    skills: ["Express", "MongoDB", "Docker"],
    available: false,
  },
  {
    id: 3,
    name: "Sofía Ruiz",
    role: "Frontend",
    skills: ["React", "Tailwind", "Vite"],
    available: true,
  },
];
