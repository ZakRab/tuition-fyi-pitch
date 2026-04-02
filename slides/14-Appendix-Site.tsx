export default function AppendixSite() {
  return (
    <div className="w-full h-full flex flex-col px-16 py-10">
      <p className="text-xl font-semibold text-gray-500 uppercase tracking-widest mb-2">
        Appendix
      </p>

      <div className="flex-1 rounded-xl overflow-hidden border border-gray-200 shadow-lg">
        <iframe
          src="https://tuition.fyi"
          className="w-full h-full"
          title="tuition.fyi"
        />
      </div>
    </div>
  );
}
