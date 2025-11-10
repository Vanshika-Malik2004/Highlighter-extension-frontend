import Image from "next/image";
import Icon from "@/assets/icon.png";
const Header = () => {
  return (
    <header className="py-2 md:py-2 fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-gray-200">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="shrink-0 flex items-center gap-2">
            <Image src={Icon} alt="Logo" width={30} height={30} />
            <span className="text-2xl font-bold text-gray-900">Mark</span>
          </div>

          <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
            <a className="text-base font-medium text-gray-900 transition duration-200 rounded hover:text-opacity-50">
              Customer Login
            </a>

            <a
              className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600"
              role="button"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
