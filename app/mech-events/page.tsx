import React from "react";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import dummy from "./dummy.jpg";
import club from "../department/assets/mech.png";
import Image from "next/image";
import "./page.css";
import ev1 from "./evtreahunt.jpg";
import ev2 from "./expo.jpg";
import ev3 from "./pp.jpg";
import ev4 from "./quiz.jpg";

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
        <h1 className="text-4xl font-bold text-white">Mech - Events</h1>
        <h3 className="text-4xl font-bold text-white">Royal Mech</h3>
        <p className="text-lg text-white max-w-md">
          Discover new possibilities and explore endless opportunities. Scroll
          down to learn more!
        </p>
        <br />
        <div className="mt-6 animate-bounce text-7xl text-white">⬇️</div>
      </div>

      {/* event 8 */}
      <div className="flex justify-center items-center min-h-24 p-5">
        <div className="w-full max-w-4xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-3xl shadow-2xl overflow-hidden relative flex flex-col md:flex-row transform hover:scale-[1.02] transition-transform duration-300 animate-fadeIn">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30 pointer-events-none" />

          {/* Left Side - Image with Special Effects */}
          <div className="md:w-1/2 relative">
            <img
              src={ev2.src}
              alt="Special Event"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
            {/* Floating Particles */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(10)].map((_, i) => (
                <span
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-white/30 animate-float"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2 p-8 relative z-10">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200 mb-4">
              Exclusive Kart Expo 2024
            </h2>
            <p className="text-gray-100 mb-4 text-lg">
              Experience the future of automotive innovation with live
              demonstrations, expert talks, and exclusive previews. Limited
              slots available!
            </p>

            {/* Special Features Section */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-black/20 rounded-lg backdrop-blur">
                <h3 className="text-xl text-cyan-300 font-semibold">
                  Spcial event
                </h3>
                {/* <p className="text-sm text-gray-200">
                  Priority entry & lounge access
                </p> */}
              </div>
              {/* <div className="p-4 bg-black/20 rounded-lg backdrop-blur">
                <h3 className="text-xl text-pink-300 font-semibold">
                  Live Demos
                </h3>
                <p className="text-sm text-gray-200">
                  See cutting-edge tech in action
                </p>
              </div> */}
            </div>

            {/* Interactive Buttons */}
            <div className="flex gap-4">
              <button className="relative inline-flex items-center px-6 py-3 font-bold rounded-full bg-white/10 backdrop-blur-lg border border-white/30 overflow-hidden group">
                <span className="relative z-10 text-white">Register Now</span>
                <span className="absolute inset-0 w-0 h-full transition-all duration-300 bg-white/50 group-hover:w-full" />
              </button>
              <button className="relative inline-flex items-center px-6 py-3 font-bold rounded-full bg-transparent border border-white/50 text-white">
                Learn More
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Floating Glowing Elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-400 rounded-full filter blur-3xl opacity-30" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-pink-400 rounded-full filter blur-3xl opacity-30" />
        </div>
      </div>
      {/* event 1 */}
      <div className="flex justify-center items-center min-h-24 p-5">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row animate-fadeIn">
          {/* Left Side - Image */}
          <div className="md:w-1/2">
            <img
              src={ev3.src}
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
              their research/review. The topics for the paper presentation can
              be selected from the mentioned themes.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> Participants need to upload their
              presentation at Participants need to bring their presentations in
              a pen-drive. A minimum number of 10 and maximum upto 15 slides are
              only acceptable. The time limit for presentation by each team is
              5-7 minutes including panel discussion
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="#">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="#">
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
              src={ev4.src}
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
              <a href="#">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="#">
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
            <h2 className="text-2xl font-bold text-gray-800">Cad modeling</h2>
            <p className="text-gray-600 mt-2">
              Unleash your creativity and technical skills in this high-stakes
              CAD Modeling Challenge! Participants will be given a design
              problem and must create a precise 3D model using CAD software such
              as SolidWorks, AutoCAD, Fusion 360, or CATIA. The competition will
              test your ability to design, optimize, and present a functional
              model within the given time frame.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> Time Limit: All participants must
              complete their models within 15 minutes Late submissions will not
              be accepted.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="#">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="#">
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
            <h2 className="text-2xl font-bold text-gray-800">Mr mechanic</h2>
            <p className="text-gray-600 mt-2">
              Event detection is the process of analyzing event streams in order
              to discover sets of events matching patterns of events in an event
              context.
            </p>
            {/* <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> Please follow the event rules for a
              great experience.
            </p> */}

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="#">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="#">
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
            <h2 className="text-2xl font-bold text-gray-800">Water rocketry</h2>
            <p className="text-gray-600 mt-2">
              Join us for an exhilarating Water Rocketry Event, where creativity
              meets physics! Participants will design, build, and launch their
              own water-powered rockets using simple materials like plastic
              bottles, pressurized water, and air.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> Materials: Only plastic bottles (PET)
              can be used as the main rocket body. No metal or glass parts are
              allowed.Propulsion: Rockets must be powered only by water and
              compressed air. No chemical reactions, explosives, or additional
              fuels are permitted.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="#">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="#">
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
      {/* event 6 */}
      <div className="flex justify-center items-center min-h-24 p-5">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row animate-fadeIn">
          {/* Left Side - Image */}
          <div className="md:w-1/2">
            <img
              src={ev1.src}
              alt="Event"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Treasurehunt</h2>
            <p className="text-gray-600 mt-2">
              One the spot instructions will be given to the participants. The
              participants will be given clues to find the treasure.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="#">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="#">
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
      {/* event 7 */}
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
              Photography/logo maker
            </h2>
            <p className="text-gray-600 mt-2">
              On the spot title will be given to the participants. The
              participants will be given a time limit to complete the task.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> Don't use google and ai tools for
              photo editor
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="#">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="#">
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
