import Link from "next/link";

const ReadyToBook = () => {
  return (
    <section className=" dark:bg-[#1e3a8a] py-16 md:py-20">
      <div className="w-11/13 mx-auto overflow-hidden rounded-[2rem] border border-[#006B4F]/15  dark:bg-[#0f234f]/55 backdrop-blur-xl shadow-sm">
        <div className="relative px-6 py-14 md:px-10 md:py-20 text-center">
          <div className="absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-[#006B4F]/15 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-[#006B4F]/10 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1f1b14] dark:text-[#F6F0E4]">
              Ready to Book Your{" "}
              <span className="text-[#006B4F] dark:text-[#9ee6c9]">
                Focus Space?
              </span>
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-sm md:text-base leading-7 text-[#5f5a50] dark:text-[#F6F0E4]/75">
              Join thousands of students who have already discovered their
              perfect study environment.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/rooms"
                className="w-full sm:w-auto rounded-full bg-[#006B4F] px-8 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-black"
              >
                Browse Rooms Now →
              </Link>

              <Link
                href="/register"
                className="w-full sm:w-auto rounded-full border border-[#006B4F] px-8 py-3.5 text-sm font-bold text-[#006B4F] transition duration-300 hover:bg-[#006B4F] hover:text-white dark:border-[#F6F0E4]/40 dark:text-[#F6F0E4]"
              >
                Create Free Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToBook;