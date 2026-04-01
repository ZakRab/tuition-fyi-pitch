export default function WhyThisExists() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">Why does this happen?</h2>

      <div className="space-y-10">
        <div>
          <h3 className="text-3xl font-bold text-[#cc0000] mb-3">Universities benefit from the opacity.</h3>
          <p className="text-2xl text-gray-600 leading-relaxed">
            1.1 million international students contribute $40B+ annually to the US economy.
            They pay full tuition. The less they know about what others pay, the less leverage they have.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#cc0000] mb-3">Students are embarrassed to talk about it.</h3>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Cost fluctuates wildly between students from the same country at the same school.
            Nobody wants to admit they paid more than their neighbor. So everyone stays quiet,
            and the information stays locked up.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#cc0000] mb-3">The only alternatives have conflicts of interest.</h3>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Agencies charge $100-$4,000 and earn commissions from the schools they recommend.
            University cost calculators are &ldquo;wildly inaccurate.&rdquo;
            The rest is Google, WhatsApp groups, and hoping you know someone.
          </p>
        </div>
      </div>
    </div>
  );
}
