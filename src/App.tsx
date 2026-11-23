import { Header } from "./components/Header";
import { DevCard } from "./components/DevCard";
import { developers } from "./data/developers";

export function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header title="DevTeam Directory" totalDevs={developers.length} />

      <main className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developers.map((dev) => (
            <DevCard key={dev.id} dev={dev} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
