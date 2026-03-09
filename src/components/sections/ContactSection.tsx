export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(18_39_87/98%)]">
            Contact Us
          </h2>

          <p className="mt-6 text-gray-600">
            If you have any questions about the alumni network, events, or
            collaborations, feel free to reach out to us. We would love to
            hear from you.
          </p>

          <div className="mt-8 space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">Address:</span> ABC College, Lucknow, India
            </p>

            <p>
              <span className="font-semibold">Email:</span> alumni@abccollege.edu
            </p>

            <p>
              <span className="font-semibold">Phone:</span> +91 9876543210
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-xl p-8">
          <form className="space-y-5">

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[rgb(18_39_87/98%)]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[rgb(18_39_87/98%)]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[rgb(18_39_87/98%)]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[rgb(18_39_87/98%)] text-white py-3 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}