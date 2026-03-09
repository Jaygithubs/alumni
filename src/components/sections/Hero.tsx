import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[rgb(18_39_87/98%)]">
            Connecting Alumni <br />
            Inspiring Future Generations
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            Welcome to the official alumni network of our institute. 
            Stay connected with fellow graduates, explore achievements, 
            and contribute to the growth of future students.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              href="#alumni-directory"
              className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Explore Alumni
            </Link>

            <Link
              href="#contact"
              className="border border-[rgb(18_39_87/98%)] text-[rgb(18_39_87/98%)] px-6 py-3 rounded-lg hover:bg-[rgb(18_39_87/98%)] hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
            alt="Alumni"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

      </div>
    </section>
  );
}