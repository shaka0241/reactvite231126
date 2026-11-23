// import type importa solo el tipo para la comprobación de TypeScript.
import type { Developer } from "../types/developer";

// Definimos las props: cada tarjeta necesita un objeto con la forma de Developer.
interface DevCardProps {
  dev: Developer;
}

// Desestructuramos dev de las props para mostrar los datos de un desarrollador.
export function DevCard({ dev }: DevCardProps) {
  return (
    <article className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
      {/* Cabecera de la tarjeta: nombre, rol y estado de disponibilidad. */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">{dev.name}</h2>
          <p className="text-sm text-indigo-600 font-medium">{dev.role}</p>
        </div>
        {/* El operador ternario selecciona los colores y el texto según available. */}
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
            dev.available
              ? "bg-emerald-100 text-emerald-700"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          {dev.available ? "Disponible" : "Ocupado"}
        </span>
      </div>

      {/* Recorremos las habilidades y mostramos una etiqueta por cada una.
          La habilidad se usa como key, por lo que debe ser única dentro de la lista. */}
      <div className="flex flex-wrap gap-2 mt-4">
        {dev.skills.map((skill) => (
          <span
            key={skill}
            className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
