export default function Team() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">The team</h2>

      <div className="grid grid-cols-2 gap-16">
        <div>
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#cc0000] to-[#ff4444] flex items-center justify-center text-white text-4xl font-bold mb-6">
            ZR
          </div>
          <h3 className="text-3xl font-bold">Zak Rab</h3>
          <p className="text-[#cc0000] text-xl font-semibold mb-5">Founder</p>
          <ul className="space-y-3 text-xl text-gray-600">
            <li>Raikes School &middot; CS and Business</li>
            <li>SWE Intern @ Microsoft (AI/ML, Azure)</li>
            <li>SWE Intern @ Hudl &middot; SWE Intern @ MDBee.ai</li>
            <li>Lead AI Engineer @ FindU (college matching)</li>
            <li>Founded GroupSell (App Store + Google Play)</li>
            <li><strong>5 startups in college</strong> &middot; International background</li>
          </ul>
        </div>

        <div>
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#444444] flex items-center justify-center text-white text-4xl font-bold mb-6">
            JS
          </div>
          <h3 className="text-3xl font-bold">Joey Shea</h3>
          <p className="text-[#cc0000] text-xl font-semibold mb-5">Co-founder</p>
          <ul className="space-y-3 text-xl text-gray-600">
            <li>Raikes School &middot; CS, Data Science, Math, Business</li>
            <li>3.98 GPA &middot; Chancellor&rsquo;s Scholar</li>
            <li>SWE Intern @ Hudl (React, TypeScript, C#)</li>
            <li>Software Intern @ Virtual Incision</li>
            <li>Incoming @ Garmin &middot; Full-stack + data science</li>
          </ul>
        </div>
      </div>

      <p className="mt-10 text-2xl text-gray-600 text-center leading-relaxed">
        We came to this because our friends are international students.
        We watched them struggle through this process and realized nobody was fixing it.
      </p>
    </div>
  );
}
