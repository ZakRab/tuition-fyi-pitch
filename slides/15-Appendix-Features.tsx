export default function AppendixFeatures() {
  return (
    <div className="w-full max-w-6xl mx-auto px-16">
      <p className="text-2xl font-semibold text-gray-500 uppercase tracking-widest mb-4">
        Appendix
      </p>
      <h2 className="text-6xl font-bold mb-12">Future features</h2>

      <div className="space-y-8">
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 rounded-full bg-[#cc0000] text-white flex items-center justify-center font-bold text-2xl shrink-0 mt-1">1</div>
          <div>
            <p className="text-4xl font-bold">Community & culture reviews</p>
            <p className="text-3xl text-gray-600 mt-1">Current students share what campus life is actually like for their community — how welcoming the environment is, where people from their country tend to cluster, what the social reality is beyond the brochure.</p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="w-14 h-14 rounded-full bg-[#cc0000] text-white flex items-center justify-center font-bold text-2xl shrink-0 mt-1">2</div>
          <div>
            <p className="text-4xl font-bold">Opt-in student ambassador network</p>
            <p className="text-3xl text-gray-600 mt-1">Current students can choose to be contactable by prospective students from their home country — the connection Leo wished he had before applying, not after.</p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="w-14 h-14 rounded-full bg-[#cc0000] text-white flex items-center justify-center font-bold text-2xl shrink-0 mt-1">3</div>
          <div>
            <p className="text-4xl font-bold">Personalized cost estimates</p>
            <p className="text-3xl text-gray-600 mt-1">Factor in test scores, GPA, nationality, and program to generate a realistic net cost range — not the wildly inaccurate number the university calculator gives you.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
