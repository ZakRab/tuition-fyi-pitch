export default function Team() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">The team</h2>

      <div className="grid grid-cols-2 gap-16">
        <div>
          <div className="w-28 h-28 rounded-full overflow-hidden mb-6">
            <img src="/zakms.jpg" alt="Zak Rab" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-3xl font-bold">Zak Rab</h3>
          <p className="text-[#cc0000] text-xl font-semibold mb-5">Founder</p>
          <ul className="space-y-3 text-2xl text-gray-600">
            <li>Raikes School, CS and Business</li>
            <li>SWE Intern @ Microsoft</li>
            <li>SWE Intern @ Hudl</li>
            <li>5 startups in college</li>
            <li>Led all 10 customer interviews</li>
          </ul>
        </div>

        <div>
          <div className="w-28 h-28 rounded-full overflow-hidden mb-6">
            <img src="/joey.jpeg" alt="Joey Shea" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-3xl font-bold">Joey Shea</h3>
          <p className="text-[#cc0000] text-xl font-semibold mb-5">Co-founder</p>
          <ul className="space-y-3 text-2xl text-gray-600">
            <li>Raikes School, CS + Data Science</li>
            <li>3.98 GPA, Chancellor&rsquo;s Scholar</li>
            <li>SWE Intern @ Hudl</li>
            <li>Incoming @ Garmin</li>
            <li>Full-stack + data science</li>
          </ul>
        </div>
      </div>

      <p className="mt-10 text-2xl text-gray-500 text-center">
        Our friends are international students. We watched them struggle through this.
      </p>
    </div>
  );
}
