export default function WhyNow() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">Why now</h2>

      <div className="space-y-10">
        <div>
          <h3 className="text-3xl font-bold text-[#cc0000] mb-3">The technology didn&rsquo;t exist before.</h3>
          <ul className="text-2xl text-gray-600 space-y-2">
            <li>TuitionFit launched in 2018 for domestic students. Couldn&rsquo;t verify at scale.</li>
            <li>AI now makes I-20 parsing and document verification cheap and reliable.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#cc0000] mb-3">The transparency wave is here.</h3>
          <ul className="text-2xl text-gray-600 space-y-2">
            <li>Glassdoor did it for reviews. Levels.fyi did it for salaries with W-2s.</li>
            <li>Tuition is next. The question is who builds it first.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#cc0000] mb-3">Record international enrollment.</h3>
          <ul className="text-2xl text-gray-600 space-y-2">
            <li>1.1M students. $40B+ annually. All-time high.</li>
            <li>Demand for cost transparency has never been greater.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
