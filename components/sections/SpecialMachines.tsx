export default function SpecialMachines() {
  const machines = [
    {
      id: 1,
      model: "Máquina Especial 1",
      description: "Indicada para ...",
    },
    {
      id: 2,
      model: "Máquina Especial 2",
      description: "Indicada para ...",
    },
    {
      id: 3,
      model: "Máquina Especial 3",
      description: "Indicada para ...",
    },
    {
      id: 4,
      model: "Máquina Especial 4",
      description: "Indicada para ...",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-16 text-center text-4xl font-bold text-gray-800">
        Máquinas Especiais
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {machines.map((machine) => (
          <div
            key={machine.id}
            className="flex flex-col items-center text-center"
          >
            <h2 className="mb-3 text-xl font-bold text-gray-800">
              {machine.model}
            </h2>
            <p className="text-sm text-gray-600">{machine.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
