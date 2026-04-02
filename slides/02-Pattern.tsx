export default function Pattern() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-4">It&rsquo;s not just Leo.</h2>
      <p className="text-3xl text-gray-500 mb-10">10 interviews. 9 countries. Same story.</p>

      <div className="space-y-6 mb-12">
        <div className="border-l-4 border-[#cc0000] pl-6">
          <p className="text-3xl italic text-gray-700">&ldquo;I paid an agency $4,000 USD just to transfer schools a year later.&rdquo;</p>
          <p className="text-2xl text-gray-500 mt-2">- Kai, China</p>
        </div>
        <div className="border-l-4 border-[#cc0000] pl-6">
          <p className="text-3xl italic text-gray-700">&ldquo;Arizona vs. Nebraska meant nothing to me. I followed my budget.&rdquo;</p>
          <p className="text-2xl text-gray-500 mt-2">- Mohannad, Saudi Arabia</p>
        </div>
        <div className="border-l-4 border-[#cc0000] pl-6">
          <p className="text-3xl italic text-gray-700">&ldquo;I get random DMs from strangers asking how I did it. There&rsquo;s no one else to ask.&rdquo;</p>
          <p className="text-2xl text-gray-500 mt-2">- Firdaws, Tajikistan</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 text-center">
        <div>
          <p className="text-7xl font-black text-[#cc0000]">10/10</p>
          <p className="text-3xl text-gray-500 mt-2">cost is #1 pain</p>
        </div>
        <div>
          <p className="text-7xl font-black text-[#cc0000]">9/10</p>
          <p className="text-3xl text-gray-500 mt-2">no connections</p>
        </div>
        <div>
          <p className="text-7xl font-black text-[#cc0000]">$4K</p>
          <p className="text-3xl text-gray-500 mt-2">max agency cost</p>
        </div>
      </div>
    </div>
  );
}
