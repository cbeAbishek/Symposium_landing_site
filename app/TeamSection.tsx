import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Dr. S. Nandhakumar",
    role: "Principal - PPG IT",
    image: "/Hod/ppgit.jpg",
  },
  { name: "Mr. S.Selvakumar", role: "HoD - AGRI", image: "/Hod/agri.jpg" },
  { name: "Mrs. G.Gokila Deepa", role: "HoD - AI&DS", image: "/Hod/aids.jpg" },
  { name: "Dr. v. Bindhu", role: "HoD - ECE", image: "/Hod/ece.jpeg" },
  { name: "Dr.M.Sundar Raj", role: "HoD - BME", image: "/Hod/bme.jpg" },
  {
    name: "Prof J. Karthick Myilvahanan",
    role: "HoD - CSE",
    image: "/Hod/cse.jpg",
  },
  { name: "Prof.T.B.Dharmaraj", role: "HoD - IT", image: "/Hod/it.jpg" },
  { name: "Dr. S. Balakrishnan", role: "HoD - MECH", image: "/innoverse.jpg" },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-16  text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 tracking-wide">
          PRESIDE OVER BY
        </h2>

        {/* Chief Patrons Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-teal-400 mb-6">
            -CHIEF PATRONS-
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Person 1 */}
            <div className="flex flex-col items-center">
              {/* <Image
                src="/innoverse.jpg"
                width={150}
                height={150}
                alt="Convener"
                className="rounded-full border-4 border-teal-500 shadow-lg shadow-teal-400/50"
              /> */}
              <p className="mt-4 text-lg font-medium text-gray-100">
                Capt. Dr. Amudhakumar
              </p>
              <p className="text-gray-400">Executive Director</p>
              <p className="text-gray-400">PPG Group Of Institutions</p>
            </div>
            {/* Person 2 */}
            <div className="flex flex-col items-center">
              {/* <Image
                src="/innoverse.jpg"
                width={150}
                height={150}
                alt="Convener"
                className="rounded-full border-4 border-teal-500 shadow-lg shadow-teal-400/50"
              /> */}
              <p className="mt-4 text-lg font-medium text-gray-100">
                Mr. Akshay Thangavel
              </p>
              <p className="text-gray-400">Vice Chairman</p>
              <p className="text-gray-400">PPG Group Of Institutions</p>
            </div>
            {/* Person 3 */}
            <div className="flex flex-col items-center">
              {/* <Image
                src="/innoverse.jpg"
                width={150}
                height={150}
                alt="Convener"
                className="rounded-full border-4 border-teal-500 shadow-lg shadow-teal-400/50"
              /> */}
              <p className="mt-4 text-lg font-medium text-gray-100">
                Mrs. Shanthi Thangavelu
              </p>
              <p className="text-gray-400">Correspondent</p>
              <p className="text-gray-400">PPG Group Of Institutions</p>
            </div>
            {/* Person 4 */}
            <div className="flex flex-col items-center">
              {/* <Image
                src="/innoverse.jpg"
                width={150}
                height={150}
                alt="Convener"
                className="rounded-full border-4 border-teal-500 shadow-lg shadow-teal-400/50"
              /> */}
              <p className="mt-4 text-lg font-medium text-gray-100">
                Dr. L. P. Thangavelu
              </p>
              <p className="text-gray-400">Chairman</p>
              <p className="text-gray-400">PPG Group Of Institutions</p>
            </div>
          </div>
        </div>

        {/* Patrons Section */}
        <h3 className="text-2xl font-semibold text-teal-400 mb-6">-PATRONS-</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* <Image
                src={member.image}
                width={120}
                height={120}
                alt={member.name}
                className="rounded-full border-2 border-teal-400 shadow-lg hover:shadow-teal-400/50 transition-transform transform hover:scale-105 duration-300"
              /> 
              <p className="mt-3 font-medium text-gray-100">{member.name}</p>
              <p className="text-sm text-gray-400">{member.role}</p>*/}
              <div className="p-4 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:rotate-2">
                <p className="mt-3 font-medium text-gray-100 transition-colors duration-300 hover:text-yellow-400">
                  {member.name}
                </p>
                <p className="text-sm text-gray-400 transition-colors duration-300 hover:text-green-400">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
