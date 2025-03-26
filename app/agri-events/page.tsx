import React from "react";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import dummy from "./dummy.jpg";
import club from "../department/assets/agri2.png";
import Image from "next/image";

export default function CSEEvent() {
  return (
    <div className="bg-gradient-to-tl sm:pt-0 lg:pt-40 p-8 from-zinc-950 via-indigo-950 to-zinc-900/0">
      <Navigation />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="flex flex-col items-center justify-center h-screen md:h-auto text-center space-y-4">
        <Image src={club} alt="Logo" width={200} height={200} />
        <h1 className="text-4xl font-bold text-white">Agri - Events</h1>
        <h3 className="text-4xl font-bold text-white">Agro Wings</h3>
        <p className="text-lg text-white max-w-[800px]">
          The Agricultural Engineering Department warmly welcomes you to
          Innoverse 2K25, a platform for innovation and creativity! Showcase
          research in Paper Presentation, test knowledge in Quiz, and exhibit
          groundbreaking ideas in Project Expo. Enjoy hands-on fun with Segment
          Identifier (parts identification) and unleash your artistic skills in
          Sharp Your Pencil (painting). Join us for an exciting experience of
          learning and creativity!
        </p>
        <br />
        <div className="mt-6 animate-bounce text-7xl text-white">⬇️</div>
      </div>

      {/* event 1 */}
      <div className="flex justify-center items-center min-h-24 p-5">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row animate-fadeIn">
          {/* Left Side - Image */}
          <div className="md:w-1/2">
            <img
              src={dummy.src}
              alt="Event"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              Paper Presentation
            </h2>
            <p className="text-gray-600 mt-2">
              A total number of 4 members are only allowed in a team to present
              their research/review.   The topics for the paper presentation can
              be selected from the mentioned themes.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> Participants need to upload their
              presentation at agrowingz.ppgit@gmail.com Participants need to
              bring their presentations in a pen-drive.   A minimum number of 10
              and maximum upto 15 slides are only acceptable.   The time limit
              for presentation by each team is 5-7 minutes including panel
              discussion
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="https://scnv.io/qE6o?qr=1">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="https://forms.gle/zyZfvia83C5Y8qAfA">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Register now
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* event 2 */}
      <div className="flex justify-center items-center min-h-24 p-5">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row animate-fadeIn">
          {/* Left Side - Image */}
          <div className="md:w-1/2">
            <img
              src={dummy.src}
              alt="Event"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Quiz</h2>
            <p className="text-gray-600 mt-2">
              The maximum number of students per team is restricted to 2.
              Questions will be from general and agricultural engineering
              aspects.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> Rounds: Two rounds will be there. The
              first round will be a written test (MCQ) and it will be qualifying
              in nature. The second round will be oral round.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="https://scnv.io/qE6o?qr=1">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="https://forms.gle/zyZfvia83C5Y8qAfA">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Register now
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* event 3 */}
      <div className="flex justify-center items-center min-h-24 p-5">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row animate-fadeIn">
          {/* Left Side - Image */}
          <div className="md:w-1/2">
            <img
              src={dummy.src}
              alt="Event"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Project Expo</h2>
            <p className="text-gray-600 mt-2">
              Team Size: Max 2 to 4 members  Project Requirements: Must present
              original work with a fully functional prototype or working model.
              A practical demonstration is essential.  Time Limit: Presentation
              time of 5 to 8 minutes, followed by a 2 to 3-minute Q&A session. 
              Judging Criteria: Innovation & Problem-Solving, Technical
              Viability, Real-World
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong>Judging Criteria: Innovation &
              Problem-Solving, Technical Viability, Real-World Application,
              Scalability, and Presentation Clarity  Disqualification Grounds:
              Submitting copied or unoriginal work, not adhering to the theme,
              failure to follow rules or meet eligibility standard.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="https://scnv.io/qE6o?qr=1">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="https://forms.gle/zyZfvia83C5Y8qAfA">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Register now
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* event 4 */}
      <div className="flex justify-center items-center min-h-24 p-5">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row animate-fadeIn">
          {/* Left Side - Image */}
          <div className="md:w-1/2">
            <img
              src={dummy.src}
              alt="Event"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              Segment identifier
            </h2>
            <p className="text-gray-600 mt-2">
              Team Size: Maximum 2 Objective: Identify tractor segments (engine
              type, transmission, application, etc.) based on clues provided.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> Time Limit: Each team has 2 minutes
              to identify each segment.  Judging: Points awarded for accuracy,
              speed, and team collaboration. Incorrect or late answers lead to
              point deductions.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="https://scnv.io/qE6o?qr=1">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="https://forms.gle/zyZfvia83C5Y8qAfA">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Register now
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* event 5 */}
      <div className="flex justify-center items-center min-h-24 p-5">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row animate-fadeIn">
          {/* Left Side - Image */}
          <div className="md:w-1/2">
            <img
              src={dummy.src}
              alt="Event"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              Sharp your pencil
            </h2>
            <p className="text-gray-600 mt-2">
              Team Size: Maximum 2 Single Round: The competition will consist of
              one round only.  Materials Provided: A chart will be provided to
              each participant, but no additional kits or materials will be
              given.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> Drawing & Presentation: Participants
              will need to use the provided chart to showcase their ideas or
              solutions related to agricultural technology.  Time Limit:
              Participants will have a set time to complete their presentation
              or drawing (e.g., 15-20 minutes). Judging Criteria: Entries will
              be judged on creativity, relevance to technology in agriculture,
              and clarity of presentation.  No External Help: Only the materials
              provided can be used. No external references or aids are allowed.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="https://scnv.io/qE6o?qr=1">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="https://forms.gle/zyZfvia83C5Y8qAfA">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Register now
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
