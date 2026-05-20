import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-96px)] bg-[linear-gradient(135deg,#f8f4ec_0%,#f3efe6_30%,#e8efe8_65%,#d9e7dd_100%)] dark:bg-[linear-gradient(135deg,#0f172a_0%,#132238_35%,#17324a_70%,#1e3a5f_100%)] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl text-center">
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#006B4F]/20 bg-white/20 text-[#006B4F] shadow-sm backdrop-blur-xl dark:border-[#F6F0E4]/20 dark:bg-white/10 dark:text-[#F6F0E4]">
          <span className="text-4xl">📖</span>
        </div>

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#006B4F] dark:text-[#9ee6c9]">
          404 Error
        </p>

        <h1 className="text-5xl font-extrabold leading-tight text-[#1f1b14] md:text-7xl dark:text-[#F6F0E4]">
          Page Not Found
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#5f5a50] md:text-lg dark:text-[#F6F0E4]/75">
          The study space you are looking for may have been moved, removed, or
          never existed.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="w-full rounded-full bg-[#006B4F] px-8 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-black sm:w-auto"
          >
            Back to Home
          </Link>

          <Link
            href="/rooms"
            className="w-full rounded-full border border-[#006B4F] px-8 py-3.5 text-sm font-bold text-[#006B4F] transition duration-300 hover:bg-[#006B4F] hover:text-white sm:w-auto dark:border-[#F6F0E4]/40 dark:text-[#F6F0E4]"
          >
            Browse Rooms
          </Link>
        </div>
      </div>
    </section>
  );
}