const steps = [
  {
    id: 1,
    title: "Search Room",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <path strokeLinecap="round" d="M20 20l-3.5-3.5" />
      </svg>
    ),
    desc: "Browse available study rooms by floor, capacity, amenities, and price to find your ideal space.",
  },
  {
    id: 2,
    title: "Choose Time Slot",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
      </svg>
    ),
    desc: "Pick your preferred date and time. Real-time availability helps prevent booking conflicts.",
  },
  {
    id: 3,
    title: "Confirm Booking",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12.5l2.5 2.5L16 9" />
      </svg>
    ),
    desc: "Review your booking summary, confirm the details, and secure your room instantly.",
  },
];

const BookingProcess = () => {
  return (
    <section className="bg-[#ede8e0] dark:bg-[#1e3a8a] py-10 md:py-15 lg:py-25">
      <div className="w-[84.615%] mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex rounded-full border border-[#006B4F]/25 bg-[#006B4F]/10 px-4 py-2 text-xs font-bold text-[#006B4F] dark:border-[#F6F0E4]/25 dark:bg-[#F6F0E4]/10 dark:text-[#F6F0E4]">
            Simple Process
          </span>

          <h2 className="mt-3.5 text-3xl md:text-5xl font-extrabold text-[#1f1b14] dark:text-[#F6F0E4]">
            Smart Booking Process
          </h2>

          <p className="mt-4 text-[#5f5a50] dark:text-[#F6F0E4]/75">
            From discovery to confirmation in 3 simple steps.
          </p>
        </div>

        <div className="relative mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 z-10 h-px w-6 bg-[#006B4F]/30" />
              )}

              <div className="group relative h-full rounded-3xl border border-[#006B4F]/15 bg-[#f9f3e8]/70 p-8 text-center shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#006B4F]/40 hover:shadow-xl dark:bg-[#0f234f]/50 dark:border-[#F6F0E4]/15">
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#006B4F]/10 text-[#006B4F] transition duration-300 group-hover:bg-[#006B4F] group-hover:text-white dark:bg-[#F6F0E4]/10 dark:text-[#F6F0E4]">
                  {step.icon}

                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#006B4F] text-xs font-extrabold text-white dark:bg-[#F6F0E4] dark:text-[#1e3a8a]">
                    {step.id}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#1f1b14] dark:text-[#F6F0E4]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#5f5a50] dark:text-[#F6F0E4]/75">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;