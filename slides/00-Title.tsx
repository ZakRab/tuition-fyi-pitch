export default function Title() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16 text-center">
      <div className="flex items-center justify-center gap-6 mb-8">
        <img src="/logo.png" alt="Tuition.fyi" className="h-36" />
        <h1 className="text-9xl font-black text-[#cc0000] tracking-tight">Tuition.fyi</h1>
      </div>
      <p className="text-5xl text-gray-600 mb-16">
        See what students actually pay for college.
      </p>
      <div className="flex items-center justify-center gap-10 text-4xl text-gray-500">
        <span>Zak Rab</span>
        <span className="text-gray-300">&</span>
        <span>Joey Shea</span>
      </div>
      <p className="mt-10 text-3xl text-gray-500">
        UNL Raikes School &middot; Startup Studio 2026
      </p>
    </div>
  );
}
