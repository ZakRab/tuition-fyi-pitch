export default function Team() {
  return (
    <div className="w-full max-w-5xl mx-auto px-12">
      <p className="text-sm font-semibold text-[#cc0000] uppercase tracking-widest mb-4">
        Why You
      </p>
      <h2 className="text-5xl font-bold mb-12">The Team</h2>

      <div className="grid grid-cols-2 gap-12">
        {/* Zak */}
        <div>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#cc0000] to-[#ff4444] flex items-center justify-center text-white text-3xl font-bold mb-6">
            ZR
          </div>
          <h3 className="text-2xl font-bold">Zak Rab</h3>
          <p className="text-[#cc0000] font-semibold mb-4">Founder</p>
          <ul className="space-y-2 text-gray-600">
            <li>Raikes School &middot; CS, Math, Business</li>
            <li>International background &mdash; dad from India, mom African American</li>
            <li>Founded GroupSell &middot; Founding Engineer at FindU</li>
            <li>Led all 10 customer interviews & survey</li>
            <li>Built relationship with UNL International Recruitment</li>
          </ul>
        </div>

        {/* Joey */}
        <div>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#444444] flex items-center justify-center text-white text-3xl font-bold mb-6">
            JS
          </div>
          <h3 className="text-2xl font-bold">Joey Shea</h3>
          <p className="text-[#cc0000] font-semibold mb-4">Co-founder</p>
          <ul className="space-y-2 text-gray-600">
            <li>Raikes School &middot; CS, Data Science, Math, Business</li>
            <li>3.98 GPA &middot; Chancellor&rsquo;s Scholar</li>
            <li>SWE Intern @ Hudl (React, TypeScript, C#)</li>
            <li>Software Intern @ Virtual Incision</li>
            <li>Incoming @ Garmin &middot; Data science + full-stack</li>
          </ul>
        </div>
      </div>

      <p className="mt-10 text-lg text-gray-500 text-center">
        Complementary skills: product vision + domain understanding &times; deep technical + data science capability.
      </p>
    </div>
  );
}
