export default function Expansion() {
  const areas = [
    {
      title: "Scholarship integration",
      description:
        "We're already collecting comprehensive scholarship data, so let's share it!",
    },
    {
      title: "Ambassador programs",
      description:
        "Match willing current students with aspiring students from their home country to provide guidance.",
    },
    {
      title: "Going domestic",
      description:
        "Out-of-state domestic students also need to know what they'll pay.",
    }, 
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">Areas of expansion</h2>

      <div className="space-y-8">
        {areas.map((item, i) => (
          <div key={i} className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-[#cc0000] text-white flex items-center justify-center font-bold text-2xl shrink-0 mt-1">
              {i + 1}
            </div>
            <div>
              <p className="text-4xl font-bold text-[#cc0000]">{item.title}</p>
              <p className="text-3xl text-gray-600 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
