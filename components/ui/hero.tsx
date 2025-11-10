"use client";
import Header from "./header";
import FeaturesGrid from "../grid";
export default function Hero() {
  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col items-center justify-center">
      <Header />
      <section className="min-h-screen flex items-center justify-center">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="px-6 text-lg text-gray-600 font-inter">
              Built for thinkers, readers, and learners
            </h1>

            <p className="mt-5 text-5xl font-bold leading-tight text-gray-900 sm:text-6xl lg:text-7xl">
              <span>Your personal </span>
              <span className="relative inline-flex">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg opacity-30 absolute inset-0"></span>
                <span className="relative"> highlighter </span>
              </span>
              <span> for the internet.</span>
            </p>

            <div className="px-8 sm:flex sm:items-center sm:justify-center sm:px-0 sm:space-x-5 mt-9">
              <a className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white bg-gray-900 rounded-xl sm:w-auto hover:bg-gray-600">
                Get the Chrome Extension
              </a>
            </div>
            <p className="mt-8 text-base text-gray-500">
              Read. Highlight. Remember. Repeat.
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-screen display-grid justify-center items-center p-10 mx-auto max-w-7xl sm:p-6 lg:p-10 xl:p-12">
        <FeaturesGrid />
      </section>
    </div>
  );
}
