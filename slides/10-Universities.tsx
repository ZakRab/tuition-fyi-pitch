export default function Universities() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">Working with universities</h2>

      <div className="grid grid-cols-2 gap-12">
        <div>
          <h3 className="text-3xl font-bold text-[#cc0000] mb-4">If they cooperate</h3>
          <ul className="text-2xl text-gray-600 space-y-4">
            <li><span className="font-bold">Lower dropout rates</span> &mdash; students who understand true costs before enrolling are less likely to transfer or drop out</li>
            <li><span className="font-bold">Better yield</span> &mdash; transparent schools attract more confident applicants</li>
            <li><span className="font-bold">Competitive advantage</span> &mdash; schools with good aid packages want students to see that</li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#1a1a1a] mb-4">If they don&rsquo;t</h3>
          <ul className="text-2xl text-gray-600 space-y-4">
            <li><span className="font-bold">Transparency happens anyway</span> &mdash; students are already sharing this data informally</li>
            <li><span className="font-bold">Lack of cooperation becomes visible</span> &mdash; our data will highlight which schools are opaque about costs</li>
            <li><span className="font-bold">Market pressure</span> &mdash; students will choose schools that have nothing to hide</li>
          </ul>
        </div>
      </div>

      <p className="mt-10 text-3xl font-semibold text-center">
        We&rsquo;re not against universities. We&rsquo;re giving them a reason to be transparent.
      </p>
    </div>
  );
}
