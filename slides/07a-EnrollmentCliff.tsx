export default function EnrollmentCliff() {
  return (
    <div className="w-full h-full flex flex-col px-12 pt-8 pb-6">
      <h2 className="text-5xl font-bold mb-2 text-center">
        Schools need international students more than ever.
      </h2>
      <p className="text-xl text-gray-500 text-center mb-6">
        Domestic enrollment is collapsing. International enrollment is climbing.
      </p>

      <div className="flex-1 grid grid-cols-2 gap-8 min-h-0">
        <div className="flex flex-col min-h-0">
          <p className="text-base font-semibold text-[#cc0000] uppercase tracking-wider text-center mb-2">
            The Enrollment Cliff
          </p>
          <div className="flex-1 flex items-center justify-center min-h-0">
            <img
              src="/enrollment-cliff.webp"
              alt="Enrollment cliff chart"
              style={{ objectFit: "contain", maxHeight: "100%", maxWidth: "100%" }}
            />
          </div>
          <p className="text-xs text-gray-400 text-center mt-1">Source: WICHE</p>
        </div>

        <div className="flex flex-col min-h-0">
          <p className="text-base font-semibold text-[#cc0000] uppercase tracking-wider text-center mb-2">
            International Students in the U.S.
          </p>
          <div className="flex-1 flex items-center justify-center min-h-0">
            <img
              src="/international_students.png"
              alt="International students chart"
              style={{ objectFit: "contain", maxHeight: "100%", maxWidth: "100%" }}
            />
          </div>
          <p className="text-xs text-gray-400 text-center mt-1">Source: Open Doors Project</p>
        </div>
      </div>
    </div>
  );
}
