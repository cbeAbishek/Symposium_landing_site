import Image from "next/image";

const teamMembers = [
  {
    name: "Tejika When",
    role: "HoD - Agri",
    image: "/innoverse.jpg",
  },
  { name: "Ma Da Silva", role: "HoD - AI&DS", image: "/innoverse.jpg" },
  { name: "Jackson Lane", role: "HoD - AI&DS", image: "/innoverse.jpg" },
  { name: "Cassandra Moore", role: "HoD - BME", image: "/innoverse.jpg" },
  { name: "Dave Caro", role: "HoD -CSE", image: "/innoverse.jpg" },
  {
    name: "Sarah Kindred",
    role: "HoD - MECH",
    image: "/innoverse.jpg",
  },
  { name: "Erika Carroway", role: "HoD - IT", image: "/innoverse.jpg" },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-16  text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 tracking-wide">
          Preside over by
        </h2>

        {/* Convener Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-teal-400 mb-6">
            Chif patrons
          </h3>
          <div className="flex flex-row justify-center">
            {/* Person 1  */}
            <div className="flex flex-col items-center p-5">
              <Image
                src="/innoverse.jpg"
                width={150}
                height={150}
                alt="Convener"
                className="rounded-full border-4 border-teal-500 shadow-lg shadow-teal-400/50"
              />
              <p className="mt-4 text-lg font-medium text-gray-100">John Doe</p>
              <p className="text-gray-400">Head of Innovation</p>
            </div>
            {/* Person 2  */}
            <div className="flex flex-col items-center p-5">
              <Image
                src="/innoverse.jpg"
                width={150}
                height={150}
                alt="Convener"
                className="rounded-full border-4 border-teal-500 shadow-lg shadow-teal-400/50"
              />
              <p className="mt-4 text-lg font-medium text-gray-100">John Doe</p>
              <p className="text-gray-400">Head of Innovation</p>
            </div>
            {/* Person 3  */}
            <div className="flex flex-col items-center p-5">
              <Image
                src="/innoverse.jpg"
                width={150}
                height={150}
                alt="Convener"
                className="rounded-full border-4 border-teal-500 shadow-lg shadow-teal-400/50"
              />
              <p className="mt-4 text-lg font-medium text-gray-100">John Doe</p>
              <p className="text-gray-400">Head of Innovation</p>
            </div>
            {/* Person 4  */}
            <div className="flex flex-col items-center p-5">
              <Image
                src="/innoverse.jpg"
                width={150}
                height={150}
                alt="Convener"
                className="rounded-full border-4 border-teal-500 shadow-lg shadow-teal-400/50"
              />
              <p className="mt-4 text-lg font-medium text-gray-100">John Doe</p>
              <p className="text-gray-400">Head of Innovation</p>
            </div>
          </div>
        </div>

        {/* Main Coordinators Section */}
        <h3 className="text-2xl font-semibold text-teal-400 mb-6">
          Depament Head
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={member.image}
                width={120}
                height={120}
                alt={member.name}
                className="rounded-full border-2 border-teal-400 shadow-lg hover:shadow-teal-400/50 transition-transform transform hover:scale-105 duration-300"
              />
              <p className="mt-3 font-medium text-gray-100">{member.name}</p>
              <p className="text-sm text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
