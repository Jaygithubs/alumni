import Link from "next/link";

const alumni = [
  {
    name: "Rahul Sharma",
    batch: "2019",
    company: "Infosys",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Priya Singh",
    batch: "2020",
    company: "TCS",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Amit Verma",
    batch: "2018",
    company: "Wipro",
    role: "Backend Developer",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Neha Gupta",
    batch: "2021",
    company: "Accenture",
    role: "Full Stack Developer",
    image: "https://i.pravatar.cc/150?img=20",
  },
  {
    name: "Rohit Mishra",
    batch: "2017",
    company: "Capgemini",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=30",
  },
  {
    name: "Anjali Patel",
    batch: "2022",
    company: "HCL",
    role: "UI Developer",
    image: "https://i.pravatar.cc/150?img=45",
  },
];

export default function AlumniDirectorySection() {
  return (
    <section id="alumni-directory" className="bg-[#f8fafc] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(18_39_87/98%)]">
            Alumni Directory
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover our alumni community working across various industries
            and contributing to innovation and leadership worldwide.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {alumni.map((person, index) => (
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

              <p className="text-sm text-gray-500">Batch {person.batch}</p>

              <p className="mt-2 text-gray-600">{person.role}</p>

              <p className="text-sm text-[#f59e0b] font-medium">
                {person.company}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/alumni-directory"
            className="bg-[rgb(18_39_87/98%)] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            View Full Directory
          </Link>
        </div>

      </div>
    </section>
  );
}