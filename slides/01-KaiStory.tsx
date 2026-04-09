export default function KaiStory() {
  return (
    <div className="w-full max-w-6xl mx-auto px-16 pt-6">
      <div className="flex items-center gap-14">
        <div className="shrink-0 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4">Meet Leo</h2>
          <div className="w-64 h-64 rounded-full bg-gray-200 overflow-hidden">
            <img src="/leo.png" alt="Leo" className="w-full h-full object-cover" />
          </div>
          <p className="text-2xl text-gray-500 mt-4">São Paulo, Brazil</p>
        </div>

        <div className="pt-2">
          <p className="text-3xl leading-snug text-gray-800">
            Leo&rsquo;s family is betting <span className="font-bold">everything</span> on him studying in the US.
            One requirement: <span className="font-bold">it has to be affordable.</span>
          </p>

          <p className="text-3xl leading-snug text-gray-800 mt-5">
            Every application fee costs <span className="font-bold">5–6×</span> in his currency.
            University &ldquo;cost calculators&rdquo; spit out numbers his consultant calls{" "}
            <span className="text-[#cc0000] font-bold">&ldquo;fake — you&rsquo;ll pay more.&rdquo;</span>
          </p>

          <p className="text-3xl leading-snug text-gray-800 mt-5">
            So he pays a consultant <span className="text-[#cc0000] font-bold">$2,000</span> for advice he can&rsquo;t verify.
            Add fees and months of his time and he&rsquo;s out{" "}
            <span className="text-[#cc0000] font-bold">~$3,000</span> before he&rsquo;s even applied.
          </p>

          <p className="text-3xl leading-snug text-gray-800 mt-5">
            And if he picks wrong? He blows his family&rsquo;s savings,
            his visa, and his shot at the US — <span className="font-bold">all of it.</span>
          </p>
        </div>
      </div>

      <p className="text-4xl font-bold text-center mt-10">
        Leo isn&rsquo;t one student. <span className="text-[#cc0000]">He&rsquo;s 275,000 every year.</span>
      </p>
    </div>
  );
}
