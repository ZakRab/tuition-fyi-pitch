export default function Traction() {
  const items = [
    { icon: "🎙️", title: "10 Customer Interviews", detail: "Students from India, Brazil, China, Saudi Arabia, Tajikistan, Kuwait, Bangladesh" },
    { icon: "📊", title: "26-Question Survey", detail: "Distributed to international students at UNL and beyond" },
    { icon: "🏛️", title: "UNL International Recruitment Office", detail: "Strategic meeting with Derek (20+ years in intl recruitment) & Grant — ongoing relationship" },
    { icon: "✅", title: "Verification Model Designed", detail: "I-20 + financial aid letter stack validated against real student documents" },
    { icon: "🌍", title: "Distribution Channels Mapped", detail: "WhatsApp groups, Reddit, Bilibili (China), Xiaohongshu, international school counselors" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-12">
      <p className="text-sm font-semibold text-[#cc0000] uppercase tracking-widest mb-4">
        Why You
      </p>
      <h2 className="text-5xl font-bold mb-10">Traction</h2>

      <div className="space-y-6">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-5">
            <span className="text-3xl mt-1">{item.icon}</span>
            <div>
              <p className="text-xl font-bold">{item.title}</p>
              <p className="text-gray-600">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
