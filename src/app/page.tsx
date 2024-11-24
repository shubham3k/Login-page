'use client';

import React, { useEffect } from "react";
import Link from "next/link";
import Particles from "@/components/ui/particles";

// Navigation links
// const navigation = [
//   { name: "Projects", href: "/projects" },
//   { name: "Contact", href: "/contact" },
// ];

export default function Home() {
  // Ensure the dark mode is always applied
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* Navigation */}
      {/* <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-100"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav> */}

      {/* Decorative Line (Glow Effect) */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 dark:via-zinc-500/50" />

      {/* Background Particles */}
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      {/* Main Title */}
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-6xl whitespace-nowrap bg-clip-text dark:bg-black">
        Welcome buddy
      </h1>

      {/* Decorative Line (Glow Effect) */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 dark:via-zinc-500/50" />

      {/* Footer Section */}
      <div className="my-16 text-center animate-fade-in">
        <h4 className="text-1xl text-white-500 dark:text-white-300">
          Just a simple authentication page to learn about routing and databases CRUD operation
        </h4>
        <div className="flex justify-center items-center gap-4">
        <div className="mt-6 animate-fade-in">
          <Link
            href="/signup"
            className="px-6 py-3 text-lg font-italic text-white duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black dark:focus:ring-offset-gray-800"
          >
            Sign Up
          </Link>
          
        </div>
        <div className="mt-6 animate-fade-in">
          <Link
            href="/login"
            className="px-6 py-3 text-lg font-italic text-white duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black dark:focus:ring-offset-gray-800"
          >
            Login
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
