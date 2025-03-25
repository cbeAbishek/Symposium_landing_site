import Image from "next/image";

const teamMembers = [
  { name: "Dr. S. Nandhakumar", role: "principal - PPG IT", image: "/innoverse.jpg" },
  { name: "Mr. S.Selvakumar", role: "HoD - Agri", image: "/Hod/agri.jpg" },
  { name: "Ma Da Silva", role: "HoD - AI&DS", image: "/innoverse.jpg" },
  { name: "Jackson Lane", role: "HoD - AI&DS", image: "/innoverse.jpg" },
  { name: "Cassandra Moore", role: "HoD - BME", image: "/innoverse.jpg" },
  { name: "Prof J. Karthick Myilvahanan", role: "HoD - CSE", image: "/Hod/cse.jpg" },
  { name: "Sarah Kindred", role: "HoD - MECH", image: "/innoverse.jpg",},
  { name: "Erika Carroway", role: "HoD - IT", image: "/innoverse.jpg" },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-16  text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 tracking-wide">
          PRESIDE OVER BY
        </h2>

        {/* Convener Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-teal-400 mb-6">
            -CHIEF PATRONS-
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
              <p className="mt-4 text-lg font-medium text-gray-100">Capt. Dr. Amudhakumar</p>
              <p className="text-gray-400">Executive Director</p>
              <p className="text-gray-400">PPG Group Of Insitutions</p>
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
              <p className="mt-4 text-lg font-medium text-gray-100">Mr.Akshay Thangavel</p>
              <p className="text-gray-400">Vice Chairman</p>
              <p className="text-gray-400">PPG Group Of Insitutions</p>
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
              <p className="mt-4 text-lg font-medium text-gray-100">Mrs. Shanthi Thangavelu</p>
              <p className="text-gray-400">Correspondent</p>
              <p className="text-gray-400">PPG Group Of Insitutions</p>
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
              <p className="mt-4 text-lg font-medium text-gray-100">Dr. L. P. Thangavelu</p>
              <p className="text-gray-400">Chairman</p>
              <p className="text-gray-400">PPG Group Of Insitutions</p>
            </div>
          </div>
        </div>

        {/* Main Coordinators Section */}
        <h3 className="text-2xl font-semibold text-teal-400 mb-6">
          -PATRONS-
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
