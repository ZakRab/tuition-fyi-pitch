export default function Solution() {
  return (
    <div className="w-full max-w-4xl mx-auto px-16 text-center">
      <div className="flex items-center justify-center gap-5 mb-10">
        <img src="/logo.png" alt="Tuition.fyi" className="h-28" />
        <h2 className="text-8xl font-black text-[#cc0000]">Tuition.fyi</h2>
      </div>

      <p className="text-5xl text-gray-700 leading-relaxed mb-12">
        An open, crowdsourced database of what students actually pay for college.
      </p>

      <ul className="text-4xl text-gray-500 space-y-4 text-left max-w-3xl mx-auto list-disc list-inside">
        <li>Verified. Not self-reported.</li>
        <li>Anonymized. No one sees your name.</li>
        <li>Free for contributors. Paid to browse otherwise.</li>
      </ul>
    </div>
  );
}
