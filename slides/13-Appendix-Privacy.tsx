export default function AppendixPrivacy() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <p className="text-xl font-semibold text-gray-400 uppercase tracking-widest mb-4">
        Appendix
      </p>
      <h2 className="text-6xl font-bold mb-12">How we anonymize data</h2>

      <div className="space-y-8">
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 rounded-full bg-[#cc0000] text-white flex items-center justify-center font-bold text-xl shrink-0 mt-1">1</div>
          <div>
            <p className="text-3xl font-bold">Document never leaves the device</p>
            <p className="text-2xl text-gray-500 mt-1">AI extracts financial fields client-side in the browser. Original is never uploaded.</p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="w-12 h-12 rounded-full bg-[#cc0000] text-white flex items-center justify-center font-bold text-xl shrink-0 mt-1">2</div>
          <div>
            <p className="text-3xl font-bold">User confirms extracted data</p>
            <p className="text-2xl text-gray-500 mt-1">They see tuition, scholarships, net cost. They approve before anything is sent.</p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="w-12 h-12 rounded-full bg-[#cc0000] text-white flex items-center justify-center font-bold text-xl shrink-0 mt-1">3</div>
          <div>
            <p className="text-3xl font-bold">Only numbers hit our server</p>
            <p className="text-2xl text-gray-500 mt-1">No name, no student ID, no SEVIS number, no address. Ever.</p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="w-12 h-12 rounded-full bg-[#cc0000] text-white flex items-center justify-center font-bold text-xl shrink-0 mt-1">4</div>
          <div>
            <p className="text-3xl font-bold">Document hash for verification</p>
            <p className="text-2xl text-gray-500 mt-1">SHA-256 hash stored as proof a real document was processed. Can&rsquo;t be reversed.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
