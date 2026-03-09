import Link from "next/link";

const medalists = [
  {
    name: "Priya Singh",
    year: "2023",
    award: "Institute Gold Medalist",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Amit Verma",
    year: "2022",
    award: "Institute Gold Medalist",
    image: "https://i.pravatar.cc/150?img=14",
  },
  {
    name: "Neha Gupta",
    year: "2021",
    award: "Institute Gold Medalist",
    image: "https://i.pravatar.cc/150?img=45",
  },
  {
    name: "Rahul Sharma",
    year: "2020",
    award: "Institute Gold Medalist",
    image: "https://i.pravatar.cc/150?img=8",
  },
];

export default function MedalistSection() {
  return (
    <section id="institute-medalist" className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(18_39_87/98%)]">
            Institute Medalists
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Celebrating the outstanding academic achievements of our students
            who have been awarded the prestigious institute gold medal.
          </p>
        </div>

        {/* Medalist Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {medalists.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
              />

              <h3 className="text-lg font-semibold text-gray-800">
                {person.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">{person.year}</p>

              <p className="mt-2 text-[#f59e0b] font-medium">
                {person.award}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            href="/institute-medalist"
            className="bg-[rgb(18_39_87/98%)] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            View All Medalists
          </Link>
        </div>

      </div>
    </section>
  );
}