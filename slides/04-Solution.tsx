export default function Solution() {
  return (
    <div className="w-full max-w-4xl mx-auto px-16 text-center">
      <img src="/logo.png" alt="Tuition.fyi" className="h-24 mx-auto mb-10" />

      <p className="text-4xl text-gray-700 leading-relaxed mb-12">
        An open, crowdsourced database of what students actually pay for college.
      </p>

      <ul className="text-3xl text-gray-500 space-y-4 text-left max-w-2xl mx-auto">
        <li>Verified. Not self-reported.</li>
        <li>Anonymized. No one sees your name.</li>
        <li>Free to contribute. Paid to browse without contributing.</li>
      </ul>

      <p className="text-2xl text-gray-400 mt-12">
        Glassdoor and Levels.fyi proved people share W-2s for salary data. Same model, applied to tuition.
      </p>
    </div>
  );
}
