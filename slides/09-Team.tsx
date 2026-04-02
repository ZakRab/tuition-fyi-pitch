export default function Team() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto px-16">
        <h2 className="text-6xl font-bold mb-12">The team</h2>

        <div className="grid grid-cols-2 gap-16">
          <div>
            <div className="w-28 h-28 rounded-full overflow-hidden mb-6 ring-4 ring-gray-800/80">
              <img src="/zak.png" alt="Zak Rab" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-baseline gap-3 mb-5">
              <h3 className="text-4xl font-bold text-[#cc0000]">Zak Rab</h3>
              <p className="text-gray-500 text-2xl font-semibold">Co-founder</p>
            </div>
            <ul className="space-y-3 text-3xl text-gray-600">
              <li>Raikes School, CS & Business</li>
              <li>SWE Intern @ Microsoft, Hudl</li>
              <li>5 startups in college</li>
              <li>Led all 10 customer interviews</li>
            </ul>
          </div>

          <div>
            <div className="w-28 h-28 rounded-full overflow-hidden mb-6 ring-4 ring-gray-800/80">
              <img src="/joey.jpeg" alt="Joey Shea" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-baseline gap-3 mb-5">
              <h3 className="text-4xl font-bold text-[#cc0000]">Joey Shea</h3>
              <p className="text-gray-500 text-2xl font-semibold">Co-founder</p>
            </div>
            <ul className="space-y-3 text-3xl text-gray-600">
              <li>Raikes School, CS & Data Science</li>
              <li>SWE Intern @ Hudl, Virtual Incision</li>
              <li>Incoming @ Garmin</li>
              <li>Full-stack, Data Science, UI/UX</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="mt-10 text-3xl text-gray-500 text-center whitespace-nowrap">
        Our friends are international students who have struggled through this.
      </p>
    </div>
  );
}
