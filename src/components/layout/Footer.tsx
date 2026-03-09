import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[rgb(18_39_87/98%)] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* About */}
        <div>
          <h3 className="text-xl font-semibold">Alumni Network</h3>
          <p className="mt-4 text-gray-300">
            Connecting alumni with their alma mater and creating
            opportunities for collaboration, mentorship, and growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>

          <div className="mt-4 flex flex-col gap-2 text-gray-300">
            <a href="#about-us" className="hover:text-[#f59e0b]">About</a>
            <a href="#giving-back" className="hover:text-[#f59e0b]">Giving Back</a>
            <a href="#alumni-directory" className="hover:text-[#f59e0b]">Alumni</a>
            <a href="#institute-medalist" className="hover:text-[#f59e0b]">Medalists</a>
            <a href="#contact" className="hover:text-[#f59e0b]">Contact</a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold">Contact</h3>

          <div className="mt-4 text-gray-300 space-y-2">
            <p>ABC College, Lucknow</p>
            <p>Email: alumni@college.edu</p>
            <p>Phone: +91 9876543210</p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 text-center py-4 text-gray-300 text-sm">
        © {new Date().getFullYear()} Alumni Network. All rights reserved.
      </div>
    </footer>
  );
}