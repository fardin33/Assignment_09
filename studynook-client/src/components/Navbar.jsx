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

      document.documentElement.classList.toggle("dark", isDark);

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
    <>
      {/* FIXED NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-999 bg-transparent pt-4">
        <nav className="relative w-11/12 mx-auto h-16 px-4 md:px-6 rounded-full border border-[#006B4F]/20 dark:border-[#F6F0E4]/20 bg-white/10 dark:bg-[#1e3a8a]/10 backdrop-blur-xl shadow-sm flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-full bg-[#006B4F] dark:bg-[#F6F0E4] flex items-center justify-center text-white dark:text-[#1e3a8a] font-bold">
              📖
            </div>

            <span className="text-xl lg:text-2xl font-serif font-semibold text-[#1f1b14] dark:text-[#F6F0E4]">
              StudyNook
            </span>
          </Link>

          {/* Desktop Links */}
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

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-6 relative shrink-0">
            <button
              onClick={handleThemeToggle}
              className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#006B4F]/25 bg-white/20 text-[#006B4F] backdrop-blur-md transition hover:bg-white/40 dark:bg-[#1e3a8a]/70 dark:text-[#F6F0E4]"
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
                  className="text-sm font-semibold text-[#4f4a40] hover:text-[#006B4F] dark:text-[#F6F0E4]">
                  Login
                </Link>

                <Link
                  href="/register"
                  className="px-5 py-2 rounded-full bg-[#006B4F] text-white text-sm font-semibold hover:bg-black transition duration-300">
                  Register
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/15 dark:bg-[#1e3a8a]/40 border border-[#006B4F]/20 dark:border-[#F6F0E4]/20 backdrop-blur-md">
                  <Image
                    src={user?.photoURL || "/default-user.png"}
                    alt="User"
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />

                  <span className="text-sm font-semibold text-[#1f1b14] dark:text-[#F6F0E4]">
                    {user?.displayName || "User"}
                  </span>

                  <span>⌄</span>
                </button>
              </div>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#006B4F]/25 bg-white/10 text-[#10231b] backdrop-blur-md transition-all duration-300 hover:bg-white/20 dark:border-[#F6F0E4]/25 dark:text-[#F6F0E4]"
            aria-label="Toggle menu">
            <span className="grid h-full w-full place-items-center text-[20px] leading-none">
              {mobileOpen ? "×" : "☰"}
            </span>
          </button>
        </nav>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden absolute right-[4.5%] top-24 z-999 w-[82%] max-w-sm rounded-2xl border border-[#006B4F]/20 bg-white/10 dark:bg-[#1e3a8a]/10 backdrop-blur-xl px-4 py-5 shadow-2xl transition-all duration-300 ease-out ${
            mobileOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-10 opacity-0 pointer-events-none"
          }`}>
          <div className="flex flex-col gap-4 text-sm">
            <button
              onClick={handleThemeToggle}
              className="flex w-fit items-center gap-2 rounded-full border border-[#006B4F]/25 px-4 py-2 text-[#006B4F] dark:text-[#F6F0E4]">
              {darkMode ? (
                <>
                  <SunIcon /> Light Mode
                </>
              ) : (
                <>
                  <MoonIcon /> Dark Mode
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

            {!user ? (
              <div className="flex w-full items-center gap-3 pt-1">
                <Link
                  href="/login"
                  className="flex-1 rounded-full border border-[#006B4F]/25 px-4 py-2 text-center font-semibold text-[#006B4F] transition hover:bg-[#006B4F] hover:text-white">
                  Login
                </Link>

                <Link
                  href="/register"
                  className="flex-1 rounded-full bg-[#006B4F] px-4 py-2 text-center font-semibold text-white transition duration-300 hover:bg-black">
                  Register
                </Link>
              </div>
            ) : (
              <button
                onClick={handleLogout}
                className="text-left text-red-600">
                Logout
              </button>
            )}
          </div>
        </div>
      </header>

      {/* NAVBAR SPACE FIX */}
      <div className="h-24" />
    </>
  );
};

export default Navbar;