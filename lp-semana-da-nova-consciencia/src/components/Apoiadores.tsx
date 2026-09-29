export function Apoiadores() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Conheça nossos apoiadores</h2>
        <div className="flex flex-wrap justify-center gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-400">
            LOGO 1
          </div>
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-400">
            LOGO 2
          </div>
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-400">
            LOGO 3
          </div>
        </div>
      </div>
    </section>
  );
}