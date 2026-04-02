export default function GoToMarket() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">How we get in</h2>

      <div className="grid grid-cols-2 gap-10">
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold mb-4">International student orgs</h3>
          <p className="text-2xl text-gray-600">Pitch directly to ISOs at every Big Ten school. They have the trust and the audience.</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold mb-4">Word of mouth + tokens</h3>
          <p className="text-2xl text-gray-600">Every contributor gets tokens to share back home. Built-in referral engine &mdash; every user brings the next one.</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold mb-4">Social media + digital ads</h3>
          <p className="text-2xl text-gray-600">Targeted content on Instagram, TikTok, YouTube, and Reddit where international students already gather.</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold mb-4">Community-first growth</h3>
          <p className="text-2xl text-gray-600">Students trust students. We grow through communities, not cold ads. Every data point makes the platform more valuable.</p>
        </div>
      </div>
    </div>
  );
}
