export default function Roadmap() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">Where we&rsquo;re going</h2>

      <div className="grid grid-cols-3 gap-10">
        <div>
          <p className="text-[#cc0000] font-bold text-xl uppercase tracking-wider mb-2">Summer 2026</p>
          <h3 className="text-3xl font-bold mb-6">Build + Launch</h3>
          <ul className="space-y-4">
            <li className="text-xl text-gray-600 flex items-start gap-3">
              <span className="text-[#cc0000] mt-1.5">&#9632;</span>
              MVP live at UNL
            </li>
            <li className="text-xl text-gray-600 flex items-start gap-3">
              <span className="text-[#cc0000] mt-1.5">&#9632;</span>
              Pre-populate top 50 schools
            </li>
            <li className="text-xl text-gray-600 flex items-start gap-3">
              <span className="text-[#cc0000] mt-1.5">&#9632;</span>
              100 verified submissions
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[#cc0000] font-bold text-xl uppercase tracking-wider mb-2">Fall 2026</p>
          <h3 className="text-3xl font-bold mb-6">Expand</h3>
          <ul className="space-y-4">
            <li className="text-xl text-gray-600 flex items-start gap-3">
              <span className="text-[#cc0000] mt-1.5">&#9632;</span>
              5-10 Midwest universities
            </li>
            <li className="text-xl text-gray-600 flex items-start gap-3">
              <span className="text-[#cc0000] mt-1.5">&#9632;</span>
              500+ verified submissions
            </li>
            <li className="text-xl text-gray-600 flex items-start gap-3">
              <span className="text-[#cc0000] mt-1.5">&#9632;</span>
              Press outreach
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[#cc0000] font-bold text-xl uppercase tracking-wider mb-2">Spring 2027</p>
          <h3 className="text-3xl font-bold mb-6">Scale</h3>
          <ul className="space-y-4">
            <li className="text-xl text-gray-600 flex items-start gap-3">
              <span className="text-[#cc0000] mt-1.5">&#9632;</span>
              National expansion
            </li>
            <li className="text-xl text-gray-600 flex items-start gap-3">
              <span className="text-[#cc0000] mt-1.5">&#9632;</span>
              Add domestic students
            </li>
            <li className="text-xl text-gray-600 flex items-start gap-3">
              <span className="text-[#cc0000] mt-1.5">&#9632;</span>
              5,000+ submissions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
