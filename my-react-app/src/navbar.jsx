import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center px-4 py-6">
      <div className="w-full max-w-5xl h-[64px] bg-[#171717] rounded-full border-[3px] border-black flex items-center px-2 shadow-sm">
        
        {/* Logo */}
        <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center shrink-0">
          <div className="relative w-6 h-6">
            {/* Simple abstract logo */}
            <div className="absolute left-0 top-1 w-4 h-4 bg-black rounded-full" />
            <div className="absolute right-0 bottom-1 w-4 h-2 bg-black rounded-full rotate-[25deg]" />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8 ml-8 text-white text-[16px] font-medium">
          <a
            href="#home"
            className="hover:text-gray-300 transition-colors"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-gray-300 transition-colors"
          >
            About
          </a>

          <a
            href="#contact"
            className="hover:text-gray-300 transition-colors"
          >
            Contact
          </a>

          <a
            href="#resource"
            className="hover:text-gray-300 transition-colors"
          >
            Resource
          </a>
        </div>

        {/* Email */}
        <a
          href="mailto:inyaet@gmail.com"
          className="ml-auto h-[50px] px-6 rounded-full bg-white text-black flex items-center justify-center text-[16px] font-medium whitespace-nowrap hover:bg-gray-100 transition-colors"
        >
          juttharam@gmail.com
        </a>
      </div>
    </nav>
  );
};

export default Navbar;