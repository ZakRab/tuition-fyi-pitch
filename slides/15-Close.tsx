export default function Close() {
  return (
    <div className="w-full max-w-4xl mx-auto px-16 text-center">
      <p className="text-3xl text-gray-500 mb-8">
        Salary transparency was inevitable. Glassdoor and Levels.fyi proved it.
      </p>

      <p className="text-4xl font-bold text-[#1a1a1a] mb-8 leading-relaxed">
        Tuition transparency is next.
      </p>

      <div className="flex items-center justify-center gap-5 mb-12">
        <img src="/logo.png" alt="Tuition.fyi" className="h-28" />
        <h2 className="text-8xl font-black text-[#cc0000]">Tuition.fyi</h2>
      </div>

      <div className="flex justify-center gap-20 mb-12">
        <div>
          <p className="text-3xl font-bold">Zak Rab</p>
          <p className="text-2xl text-gray-500">Co-founder</p>
        </div>
        <div>
          <p className="text-3xl font-bold">Joey Shea</p>
          <p className="text-2xl text-gray-500">Co-founder</p>
        </div>
      </div>

      <p className="text-5xl font-bold text-[#1a1a1a]">
        Questions?
      </p>
    </div>
  );
}
