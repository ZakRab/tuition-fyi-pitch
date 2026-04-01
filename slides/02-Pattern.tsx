export default function Pattern() {
  const quotes = [
    { quote: "You pay application fees in USD, 5-6x my currency, before you even know your scholarship.", who: "Lucas, Brazil", detail: "Paid $2,000 for a consulting firm" },
    { quote: "I get random DMs from strangers across Tajikistan asking how I did it. There's no one else to ask.", who: "Firdaws, Tajikistan", detail: "99% in his country never try" },
    { quote: "Finding contacts at different schools was nearly impossible.", who: "Aman, India", detail: "Checked for Muslim community before committing" },
    { quote: "My mom didn't even know you could apply on your own. She thought agencies were the only way.", who: "Kai, China", detail: "Paid $4,000 to an agency" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-4">It&rsquo;s not just Kai.</h2>
      <p className="text-2xl text-gray-500 mb-10">10 interviews. 9 countries. The same story every time.</p>

      <div className="space-y-6">
        {quotes.map((q, i) => (
          <div key={i} className="flex items-start gap-6">
            <div className="border-l-4 border-[#cc0000] pl-6 flex-1">
              <p className="text-2xl italic text-gray-700 leading-relaxed">&ldquo;{q.quote}&rdquo;</p>
              <p className="text-xl text-gray-400 mt-2">- {q.who} &middot; {q.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-3 gap-8 text-center">
        <div>
          <p className="text-6xl font-black text-[#cc0000]">10/10</p>
          <p className="text-xl text-gray-500 mt-2">named cost as #1 pain</p>
        </div>
        <div>
          <p className="text-6xl font-black text-[#cc0000]">9/10</p>
          <p className="text-xl text-gray-500 mt-2">had no one to talk to</p>
        </div>
        <div>
          <p className="text-6xl font-black text-[#cc0000]">$100-$4K</p>
          <p className="text-xl text-gray-500 mt-2">spent on agencies</p>
        </div>
      </div>
    </div>
  );
}
