import { FaPen, FaCloud, FaBook } from "react-icons/fa";
import { PiRainbowCloudBold } from "react-icons/pi";
import { IoSettings, IoToggle } from "react-icons/io5";

export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24 bg-white rounded-xl p-10 box-shadow-lg border border-gray-900  ">
      {/* Support */}
      <div className="md:p-8 lg:p-14">
        <FaPen className="mx-auto text-gray-900" size={46} />
        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
          Persistent Highlights Everywhere
        </h3>
        <p className="mt-5 text-base text-gray-600 font-pj">
          Your highlights stay even after reloads or revisits — across all
          websites, thanks to anchor-based text mapping.
        </p>
      </div>

      {/* Sales */}
      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
        <FaCloud className="mx-auto text-gray-900" size={46} />
        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
          Smart Cloud Sync
        </h3>
        <p className="mt-5 text-base text-gray-600 font-pj">
          All your highlights and notes are securely synced via Supabase — so
          you can access them from any device.
        </p>
      </div>

      {/* Onboarding */}
      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
        <FaBook className="mx-auto text-gray-900" size={42} />
        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
          Add Notes to Highlights
        </h3>
        <p className="mt-5 text-base text-gray-600 font-pj">
          Annotate your highlights with personal notes, thoughts, or reminders
          to capture deeper insights.
        </p>
      </div>

      {/* Product */}
      <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
        <PiRainbowCloudBold className="mx-auto text-gray-900" size={42} />
        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
          Custom Highlight Colors
        </h3>
        <p className="mt-5 text-base text-gray-600 font-pj">
          Choose from multiple color options to organize your highlights
          visually — by topic, priority, or mood.
        </p>
      </div>

      {/* Quality */}
      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
        <IoSettings className="mx-auto text-gray-900" size={46} />
        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
          Edit & Manage Highlights Easily
        </h3>
        <p className="mt-5 text-base text-gray-600 font-pj">
          Edit colors, update notes, or delete highlights directly from the page
          or the extension popup.
        </p>
      </div>

      {/* Result */}
      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
        <IoToggle className="mx-auto text-gray-900" size={44} />
        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
          Enable or Disable Anytime
        </h3>
        <p className="mt-5 text-base text-gray-600 font-pj">
          A simple toggle in the popup lets you pause or resume the highlighter
          instantly — without losing data.
        </p>
      </div>
    </div>
  );
}
