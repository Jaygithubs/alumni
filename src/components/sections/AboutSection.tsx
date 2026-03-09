import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585"
            alt="College Campus"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(18_39_87/98%)]">
            About Our Alumni Network
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Our alumni community represents the strength, tradition, and 
            success of our institute. Graduates from different batches are 
            contributing across industries, technology, research, and 
            entrepreneurship worldwide.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Through this platform, we aim to reconnect alumni with their 
            alma mater, encourage networking, share opportunities, and 
            inspire current students with real success stories.
          </p>

          <div className="mt-8">
            <Link
              href="/about-us"
              className="bg-[rgb(18_39_87/98%)] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Read More
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}