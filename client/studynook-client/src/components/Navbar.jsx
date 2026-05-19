"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5"
    stroke="currentColor"
    strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36-1.42 1.42M7.06 16.94l-1.42 1.42m12.72 0-1.42-1.42M7.06 7.06 5.64 5.64"
    />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

const MoonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5"
    stroke="currentColor"
    strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
    />
  </svg>
);

const Navbar = ({ user, handleLogout }) => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const isDark = savedTheme === "dark";

      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return isDark;
    }

    return false;
  });

  const handleThemeToggle = () => {
    setDarkMode((prev) => {
      const updatedMode = !prev;

      document.documentElement.classList.toggle("dark", updatedMode);
      localStorage.setItem("theme", updatedMode ? "dark" : "light");

      return updatedMode;
    });
  };

  const linkClass =
    "text-base font-bold text-[#4f4a40] hover:text-[#006B4F] dark:text-[#F6F0E4] dark:hover:text-[#F6F0E4] transition";

  return (
    <header className="sticky top-0 z-50 bg-transparent pt-4">
      <nav className="w-11/13 mx-auto h-16 px-4 md:px-6 rounded-full bg-[#F6F0E4]/60 dark:bg-[#1e3a8a]/60 border border-[#006B4F]/20 dark:border-[#F6F0E4]/20 backdrop-blur-xl shadow-sm flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-full bg-[#006B4F] dark:bg-[#F6F0E4] flex items-center justify-center text-white dark:text-[#1e3a8a] font-bold">
            📖
          </div>

          <span className="text-xl lg:text-2xl font-serif font-semibold text-[#1f1b14] dark:text-[#F6F0E4]">
            StudyNook
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          <Link href="/" className={linkClass}>
            Home
          </Link>
          <Link href="/rooms" className={linkClass}>
            Rooms
          </Link>

          {user && (
            <>
              <Link href="/add-room" className={linkClass}>
                Add Room
              </Link>
              <Link href="/my-listings" className={linkClass}>
                My Listings
              </Link>
              <Link href="/my-bookings" className={linkClass}>
                My Bookings
              </Link>
            </>
          )}
        </div>

        <div className="hidden md:flex items-center gap-6 relative shrink-0">
          <button
            onClick={handleThemeToggle}
            className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#006B4F]/25 bg-white/20 text-[#006B4F] backdrop-blur-md transition hover:bg-white/40 dark:bg-[#1e3a8a]/70 dark:text-[#F6F0E4] dark:hover:bg-[#1e40af]"
            aria-label="Toggle theme">
            <span
              className={`absolute transition-all duration-300 ${
                darkMode
                  ? "scale-100 rotate-0 opacity-100"
                  : "scale-0 -rotate-90 opacity-0"
              }`}>
              <SunIcon />
            </span>

            <span
              className={`absolute transition-all duration-300 ${
                darkMode
                  ? "scale-0 rotate-90 opacity-0"
                  : "scale-100 rotate-0 opacity-100"
              }`}>
              <MoonIcon />
            </span>
          </button>

          {!user ? (
            <>
              <Link
                href="/login"
                className="text-sm font-semibold text-[#4f4a40] hover:text-[#006B4F] dark:text-[#F6F0E4] transition">
                Login
              </Link>

              <Link
                href="/register"
                className="px-5 py-2 rounded-full bg-[#006B4F] text-white text-sm font-semibold hover:bg-black transition duration-300 dark:bg-[#F6F0E4] dark:text-[#1e3a8a] dark:hover:bg-black dark:hover:text-white">
                Register
              </Link>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/15 dark:bg-[#1e3a8a]/40 border border-[#006B4F]/20 dark:border-[#F6F0E4]/20 backdrop-blur-md hover:bg-white/30 dark:hover:bg-[#1e40af]/70 transition">
                <Image
                  src={user?.photoURL || "/default-user.png"}
                  alt={user?.displayName || "User"}
                  width={32}
                  height={32}
                  className="rounded-full object-cover border border-[#006B4F] dark:border-[#F6F0E4]"
                />

                <span className="text-sm font-semibold text-[#1f1b14] dark:text-[#F6F0E4] max-w-28 truncate">
                  {user?.displayName || "User"}
                </span>

                <span className="text-[#006B4F] dark:text-[#F6F0E4] text-sm">
                  ⌄
                </span>
              </button>

              {open && (
                <div className="absolute right-0 mt-3 w-60 rounded-2xl border border-[#006B4F]/20 dark:border-[#F6F0E4]/20 bg-[#F6F0E4]/35 dark:bg-[#1e3a8a]/35 backdrop-blur-xl shadow-xl p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src={user?.photoURL || "/default-user.png"}
                      alt={user?.displayName || "User"}
                      width={42}
                      height={42}
                      className="rounded-full object-cover border border-[#006B4F] dark:border-[#F6F0E4]"
                    />

                    <div className="min-w-0">
                      <h4 className="font-semibold text-[#1f1b14] dark:text-[#F6F0E4] truncate">
                        {user?.displayName || "User"}
                      </h4>
                      <p className="text-xs text-[#5f5a50] dark:text-[#F6F0E4]/80 truncate">
                        {user?.email}
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/my-bookings"
                    className="flex items-center gap-2 py-2 text-sm text-[#1f1b14] dark:text-[#F6F0E4] hover:text-[#006B4F]"
                    onClick={() => setOpen(false)}>
                    <span>📅</span> My Bookings
                  </Link>

                  <Link
                    href="/my-listings"
                    className="flex items-center gap-2 py-2 text-sm text-[#1f1b14] dark:text-[#F6F0E4] hover:text-[#006B4F]"
                    onClick={() => setOpen(false)}>
                    <span>☷</span> My Listings
                  </Link>

                  <Link
                    href="/add-room"
                    className="flex items-center gap-2 py-2 text-sm text-[#1f1b14] dark:text-[#F6F0E4] hover:text-[#006B4F]"
                    onClick={() => setOpen(false)}>
                    <span>＋</span> Add Room
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 pt-3 mt-2 border-t border-[#006B4F]/20 dark:border-[#F6F0E4]/20 text-sm text-red-600 dark:text-red-300 hover:text-red-700 w-full">
                    <span>↪</span> Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#10231b] dark:text-[#F6F0E4] text-2xl">
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden w-11/12 mx-auto mt-2 rounded-2xl border border-[#006B4F]/20 dark:border-[#F6F0E4]/20 bg-[#F6F0E4]/60 dark:bg-[#1e3a8a]/20 backdrop-blur-xl shadow-lg px-4 pb-4">
          <div className="flex flex-col gap-3 pt-4 text-sm">
            <button
              onClick={handleThemeToggle}
              className="flex w-fit items-center gap-2 rounded-full border border-[#006B4F]/25 px-4 py-2 text-[#006B4F] dark:text-[#F6F0E4]">
              {darkMode ? (
                <>
                  <SunIcon />
                  Light Mode
                </>
              ) : (
                <>
                  <MoonIcon />
                  Dark Mode
                </>
              )}
            </button>

            <Link
              href="/"
              className={linkClass}
              onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link
              href="/rooms"
              className={linkClass}
              onClick={() => setMobileOpen(false)}>
              Rooms
            </Link>

            {user && (
              <>
                <Link
                  href="/add-room"
                  className={linkClass}
                  onClick={() => setMobileOpen(false)}>
                  Add Room
                </Link>
                <Link
                  href="/my-listings"
                  className={linkClass}
                  onClick={() => setMobileOpen(false)}>
                  My Listings
                </Link>
                <Link
                  href="/my-bookings"
                  className={linkClass}
                  onClick={() => setMobileOpen(false)}>
                  My Bookings
                </Link>
              </>
            )}

            {!user ? (
              <div className="flex gap-5 pt-2">
                <Link
                  href="/login"
                  className="text-[#006B4F] dark:text-[#F6F0E4] font-semibold">
                  Login
                </Link>

                <Link
                  href="/register"
                  className="px-4 py-2 rounded-full bg-[#006B4F] text-white hover:bg-black transition duration-300 dark:bg-[#F6F0E4] dark:text-[#1e3a8a] dark:hover:bg-black dark:hover:text-white">
                  Register
                </Link>
              </div>
            ) : (
              <button
                onClick={handleLogout}
                className="text-left text-red-600 dark:text-red-300">
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
