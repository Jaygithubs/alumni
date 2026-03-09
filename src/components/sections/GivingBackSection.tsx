import Link from "next/link";

const initiatives = [
  {
    title: "Mentorship Program",
    description:
      "Alumni guide current students by sharing career advice, industry insights, and real-world experience.",
    icon: "🎓",
  },
  {
    title: "Scholarship Support",
    description:
      "Alumni contribute to scholarships that help deserving students continue their education.",
    icon: "💰",
  },
  {
    title: "Career Opportunities",
    description:
      "Alumni help students by sharing internships, job openings, and career guidance.",
    icon: "💼",
  },
  {
    title: "Campus Development",
    description:
      "Support initiatives that improve campus infrastructure, labs, and student resources.",
    icon: "🏫",
  },
];

export default function GivingBackSection() {
  return (
    <section id="giving-back" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(18_39_87/98%)]">
            Giving Back
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our alumni continue to support the institute by mentoring students,
            sharing opportunities, and contributing to the growth of the campus
            community.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((item, index) => (
            <div
              key={index}
              className="bg-[#f8fafc] rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>

              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            href="/giving-back"
            className="bg-[rgb(18_39_87/98%)] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}