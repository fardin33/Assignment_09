import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const images = {
    main: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    study:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    library:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
  };

  return (
    <section className=" dark:bg-[#1e3a8a] py-16 md:py-24 overflow-hidden">
      <div className="w-11/13 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#006B4F]/30 bg-[#006B4F]/10 px-4 py-2 text-sm font-semibold text-[#006B4F] dark:text-[#F6F0E4]">
            ✦ Campus-Wide Study Room Network
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl xl:text-[52px] font-extrabold leading-tight text-[#1f1b14] dark:text-[#F6F0E4]">
            Find Your{" "}
            <span className="text-[#006B4F] dark:text-[#9ee6c9]">Perfect</span>{" "}
            Study Room
          </h1>

          <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base md:text-lg leading-8 text-[#5f5a50] dark:text-[#F6F0E4]/80">
            Browse and book quiet, private study rooms in your library. List
            your own room, check real-time availability, and enjoy a calm study
            experience without conflicts.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/rooms"
              className="rounded-full bg-[#006B4F] px-7 py-3 text-sm font-bold text-white transition duration-300 hover:bg-black">
              Explore Rooms →
            </Link>

            <Link
              href="/add-room"
              className="rounded-full border border-[#006B4F] px-7 py-3 text-sm font-bold text-[#006B4F] transition duration-300 hover:bg-[#006B4F] hover:text-white dark:text-[#F6F0E4] dark:border-[#F6F0E4]">
              List Your Room
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
            <div>
              <h3 className="text-2xl font-extrabold text-[#006B4F] dark:text-[#9ee6c9]">
                500+
              </h3>
              <p className="text-sm text-[#5f5a50] dark:text-[#F6F0E4]/70">
                Study Rooms
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-[#006B4F] dark:text-[#9ee6c9]">
                12K+
              </h3>
              <p className="text-sm text-[#5f5a50] dark:text-[#F6F0E4]/70">
                Bookings
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-[#006B4F] dark:text-[#9ee6c9]">
                4.8★
              </h3>
              <p className="text-sm text-[#5f5a50] dark:text-[#F6F0E4]/70">
                Avg. Rating
              </p>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="relative">
          <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-[#006B4F]/10 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 h-44 w-44 rounded-full bg-[#006B4F]/10 blur-3xl" />

          <div className="relative grid grid-cols-12 gap-5 items-center">
            <div className="col-span-12 md:col-span-8">
              <Image
                src={images.main}
                alt="Modern study room"
                width={700}
                height={800}
                className="w-full h-105 md:h-135 object-cover rounded-[28px] border border-[#006B4F]/15 shadow-lg"
              />
            </div>

            <div className="col-span-12 md:col-span-4 flex md:flex-col gap-5">
              <Image
                src={images.study}
                alt="Students studying together"
                width={350}
                height={260}
                className="w-1/2 md:w-full h-42.5 md:h-46.25 object-cover rounded-[24px] border border-[#006B4F]/15 shadow-md"
              />

              <Image
                src={images.library}
                alt="Library study area"
                width={350}
                height={260}
                className="w-1/2 md:w-full h-42.5 md:h-46.25 object-cover rounded-[24px] border border-[#006B4F]/15 shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
