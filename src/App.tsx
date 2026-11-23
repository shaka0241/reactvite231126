// Importamos los componentes visuales y la lista de datos que mostrará la página.
import { Header } from "./components/Header";
import { DevCard } from "./components/DevCard";
import { developers } from "./data/developers";

// App compone la página principal a partir de componentes más pequeños.
export function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Pasamos el título y el número de desarrolladores como props a Header. */}
      <Header title="DevTeam Directory" totalDevs={developers.length} />

      <main className="max-w-4xl mx-auto p-6">
        {/* La cuadrícula cambia de una a tres columnas según el ancho de pantalla. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* map crea una tarjeta por perfil; key ayuda a React a identificarla en la lista. */}
          {developers.map((dev) => (
            <DevCard key={dev.id} dev={dev} />
          ))}
        </div>
      </main>
    </div>
  );
}

// La exportación por defecto permite importar App sin usar llaves.
export default App;
