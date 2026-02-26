"use client";

import UniverseScene from "@/components/three/UniverseScene";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <UniverseScene />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center backdrop-blur-sm">
          <h1 className="mb-2 text-6xl font-bold text-white md:text-7xl">
            Mayur Upadhayay
          </h1>
          <p className="mb-8 text-xl text-blue-200 md:text-2xl">
            Senior Software Engineer
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 font-semibold text-white shadow-lg shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/70">
              <span className="relative z-10">Explore Universe</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>

            <button className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-3 font-semibold text-white shadow-lg shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/70">
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
