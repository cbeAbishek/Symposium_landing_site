import React from "react";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import dummy from "./dummy.jpg";
import club from "../department/assets/cse.png";
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
        <h1 className="text-4xl font-bold text-white">CSE - Events</h1>
        <h3 className="text-4xl font-bold text-white">CyberZen</h3>
        <p className="text-lg text-white max-w-md">
          Discover new possibilities and explore endless opportunities. Scroll
          down to learn more!
        </p>
        {/* <div className="mb-4">
                <a href="https://symposium-landing-site.vercel.app/"><button type="button" className='flex max-w-sm w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md rounded-lg mx-auto p-5'>
                    <div className="flex sm:flex-cols-12 gap-6">
                        <div className="col-span-2 pt-1.5">Register Now</div>
                    </div>    
                </button></a>
            </div>
        <br /> */}
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
              Present groundbreaking ideas, research, and case studies. Engage
              in dynamic discussions and showcase innovation!
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> <strong>Solo/Team (5)</strong>.
              Presentation: <strong>8 min + 2 min Q&A</strong>. Slides:{" "}
              <strong>10-12 max</strong>. <strong>No plagiarism</strong>.
              Judging:{" "}
              <strong>
                innovation, research, presentation, relevance, Q&A
              </strong>
              . Open to <strong>UG/PG</strong>.{" "}
              <strong>Prizes & certificates</strong>.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
               <a href="https://carpal-legume-370.notion.site/Innoverse-2K25-CSE-1be8f0a8faf4807d9125e254ff5afb0d?pvs=4">
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
              src={dummy.src}
              alt="Event"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800">HackerRank</h2>
            <p className="text-gray-600 mt-2">
              Solve algorithmic challenges, compete globally, track progress,
              and enhance problem-solving skills in real-time!
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> <strong>Solo/Team (2)</strong>.
              Platform: <strong>HackerRank</strong>. Languages:{" "}
              <strong>Python, Java, C++</strong>. Judging:{" "}
              <strong>efficiency, correctness, creativity</strong>.{" "}
              <strong>No plagiarism</strong>. Open to <strong>UG/PG</strong>.{" "}
              <strong>Prizes & certificates</strong>.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
               <a href="https://carpal-legume-370.notion.site/Innoverse-2K25-CSE-1be8f0a8faf4807d9125e254ff5afb0d?pvs=4">
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
            <h2 className="text-2xl font-bold text-gray-800">WebDesging</h2>
            <p className="text-gray-600 mt-2">
              Craft stunning, responsive websites. Showcase creativity, coding
              expertise, and innovative UI/UX designs!
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> <strong>Solo/Team (2)</strong>.
              Theme-based <strong>web design</strong>. Time:{" "}
              <strong>2-3 hrs</strong>. Tech:{" "}
              <strong>HTML, CSS, JS, Bootstrap, Tailwind</strong>. Judging:{" "}
              <strong>creativity, UI/UX, responsiveness, functionality</strong>.{" "}
              <strong>No templates/plagiarism</strong>. Open to{" "}
              <strong>UG/PG</strong>. <strong>Prizes & certificates</strong>.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
               <a href="https://carpal-legume-370.notion.site/Innoverse-2K25-CSE-1be8f0a8faf4807d9125e254ff5afb0d?pvs=4">
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
            <h2 className="text-2xl font-bold text-gray-800">E-Football</h2>
            <p className="text-gray-600 mt-2">
              Compete in intense virtual football battles, showcase skills, and
              claim victory on the digital pitch!
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> <strong>Team (3)</strong>. Game:{" "}
              <strong>eFootball</strong>. Rules:{" "}
              <strong>Fair play, no external help</strong>. Judging:{" "}
              <strong>performance, teamwork, sportsmanship</strong>.{" "}
              <strong>Prizes & certificates</strong>.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
               <a href="https://carpal-legume-370.notion.site/Innoverse-2K25-CSE-1be8f0a8faf4807d9125e254ff5afb0d?pvs=4">
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
            <h2 className="text-2xl font-bold text-gray-800">Fire Crackers</h2>
            <p className="text-gray-600 mt-2">
              A thrilling, fun-packed game with exciting balloon challenges,
              laughter, and high-energy action!
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> <strong>Solo/Team (2-4)</strong>.
              Game: <strong>Balloon Stomp, Relay, Pop Quiz</strong>. Rules:{" "}
              <strong>No external objects</strong>. Time-based. Highest{" "}
              <strong>score wins</strong>.{" "}
              <strong>Judges’ decision final</strong>.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
               <a href="https://carpal-legume-370.notion.site/Innoverse-2K25-CSE-1be8f0a8faf4807d9125e254ff5afb0d?pvs=4">
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
