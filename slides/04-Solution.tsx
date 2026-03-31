export default function Solution() {
  return (
    <div className="w-full max-w-5xl mx-auto px-12">
      <p className="text-sm font-semibold text-[#cc0000] uppercase tracking-widest mb-4">
        Why This
      </p>
      <h2 className="text-5xl font-bold mb-10">The Solution</h2>

      <p className="text-2xl text-gray-700 mb-10 max-w-3xl">
        <strong className="text-[#cc0000]">Openroll</strong> is an open-source, crowdsourced database
        of what international students <em>actually</em> pay at US universities.
      </p>

      <div className="grid grid-cols-3 gap-8">
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-3xl mb-4">1</div>
          <h3 className="text-xl font-bold mb-2">Submit your data</h3>
          <p className="text-gray-600">
            University, country of origin, tuition charged, scholarships received, net cost.
            All anonymized.
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-3xl mb-4">2</div>
          <h3 className="text-xl font-bold mb-2">Verify with documents</h3>
          <p className="text-gray-600">
            I-20 form + financial aid letter. Federal, standardized,
            every international student has one.
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-3xl mb-4">3</div>
          <h3 className="text-xl font-bold mb-2">See what others paid</h3>
          <p className="text-gray-600">
            Filter by country, university, program.
            Give one data point, get thousands back.
          </p>
        </div>
      </div>
    </div>
  );
}
