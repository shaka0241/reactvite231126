interface HeaderProps {
  title: string;
  totalDevs: number;
}

export function Header({ title, totalDevs }: HeaderProps) {
  return (
    <header className="bg-slate-900 text-white py-6 px-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <span className="bg-indigo-600 text-sm font-medium px-3 py-1 rounded-full">
          {totalDevs} perfiles
        </span>
      </div>
    </header>
  );
}
