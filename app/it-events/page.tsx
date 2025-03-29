import React from "react";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import dummy from "./dummy.jpg";
import ev2 from "./ev1.jpg";
import ev1 from "./ev2.jpg";
import ev3 from "./ev3.jpg";
import ev4 from "./ev4.jpg";
import ev5 from "./ev5.jpg";
import club from "../department/assets/it.png";
import Image from "next/image";

export default function CSEEvent() {
  return (
    <div className="bg-gradient-to-tl from-zinc-950 via-indigo-950 to-zinc-900/0">
      <Navigation />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="flex flex-col items-center justify-center h-screen md:h-auto text-center space-y-4">
        <Image src={club} alt="Logo" width={200} height={200} />
        <h1 className="text-4xl font-bold text-white">
          IT Department - Events
        </h1>
        <p className="text-lg text-white max-w-md">
          Discover new possibilities and explore endless opportunities. Scroll
          down to learn more!
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
              src={ev1.src}
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
              Paper Presentation – Present your research, ideas, and innovations
              to a panel of experts. Impress them with your knowledge, clarity,
              and impactful insights on trending topics.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> Paper Presentation will be open topic
              . Time limit for presentation by each team will be 3-5 . slides
              should be 8 to 12 . Total number of member is 2 to 4 .
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="https://file.notion.so/f/f/b10e5498-687b-4e91-aab0-a262add27a16/47caccdf-3e0f-4a29-86e4-b9f8b244c852/IT_guidelines.pdf?table=block&id=1c5082a6-efc3-807f-a0a1-dd4bec95d02f&spaceId=b10e5498-687b-4e91-aab0-a262add27a16&expirationTimestamp=1743379200000&signature=1J-yJ4aMHbw52h0ZKSw12IiTpiDW21KZCwExIcb-eI4&downloadName=IT+guidelines.pdf">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSepqIXSmww2ZbvGMNkRxpw2jUXahXolOUOavpyq5L-kL51uBg/viewform">
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
              src={ev2.src}
              alt="Event"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800">BEST MANAGER</h2>
            <p className="text-gray-600 mt-2">
              Best Manager – Test your leadership, decision-making, and
              problem-solving skills in real-world business scenarios. Can you
              handle the pressure and emerge as the ultimate manager?
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong>. The “Best Manager” Competition will
              be connducted in two rounds. . Detailed Instruction for the event
              will be provided tto all participants during the event itself
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="https://file.notion.so/f/f/b10e5498-687b-4e91-aab0-a262add27a16/47caccdf-3e0f-4a29-86e4-b9f8b244c852/IT_guidelines.pdf?table=block&id=1c5082a6-efc3-807f-a0a1-dd4bec95d02f&spaceId=b10e5498-687b-4e91-aab0-a262add27a16&expirationTimestamp=1743379200000&signature=1J-yJ4aMHbw52h0ZKSw12IiTpiDW21KZCwExIcb-eI4&downloadName=IT+guidelines.pdf">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSepqIXSmww2ZbvGMNkRxpw2jUXahXolOUOavpyq5L-kL51uBg/viewform">
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
              src={ev3.src}
              alt="Event"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800">WEBWEAVERS</h2>
            <p className="text-gray-600 mt-2">
              WebWeavers – A battle of creativity and coding! Design, develop,
              and showcase your web development skills through innovative and
              functional website designs.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> . Weace your tought with the help of
              frontend code. . It is open for both individual participants and
              team entries . Design completion should be done within the given
              time limit
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="https://file.notion.so/f/f/b10e5498-687b-4e91-aab0-a262add27a16/47caccdf-3e0f-4a29-86e4-b9f8b244c852/IT_guidelines.pdf?table=block&id=1c5082a6-efc3-807f-a0a1-dd4bec95d02f&spaceId=b10e5498-687b-4e91-aab0-a262add27a16&expirationTimestamp=1743379200000&signature=1J-yJ4aMHbw52h0ZKSw12IiTpiDW21KZCwExIcb-eI4&downloadName=IT+guidelines.pdf">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSepqIXSmww2ZbvGMNkRxpw2jUXahXolOUOavpyq5L-kL51uBg/viewform">
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
              src={ev4.src}
              alt="Event"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              E-SPORTS-FREE FIRE
            </h2>
            <p className="text-gray-600 mt-2">
              E-Sports (Free Fire) – Engage in an intense battle of strategy,
              teamwork, and quick reflexes in one of the most popular battle
              royale games. Victory awaits the strongest squad!
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> . The Competition will have two
              rounds . It is open for both individual participants and team
              entries
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="https://file.notion.so/f/f/b10e5498-687b-4e91-aab0-a262add27a16/47caccdf-3e0f-4a29-86e4-b9f8b244c852/IT_guidelines.pdf?table=block&id=1c5082a6-efc3-807f-a0a1-dd4bec95d02f&spaceId=b10e5498-687b-4e91-aab0-a262add27a16&expirationTimestamp=1743379200000&signature=1J-yJ4aMHbw52h0ZKSw12IiTpiDW21KZCwExIcb-eI4&downloadName=IT+guidelines.pdf">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSepqIXSmww2ZbvGMNkRxpw2jUXahXolOUOavpyq5L-kL51uBg/viewform">
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
              src={ev5.src}
              alt="Event"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800">GUESS IT RIGHT</h2>
            <p className="text-gray-600 mt-2">
              Guess It Right – A fun and engaging guessing game that challenges
              your wit, observation, and logical thinking. Decode clues and
              answer correctly before time runs out!
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> . Each team must have four players
              present at the area . The competition is a Clash Squad tournament
              for all participants . Teams violating rules or hacking will face
              immediate disqualification
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="https://file.notion.so/f/f/b10e5498-687b-4e91-aab0-a262add27a16/47caccdf-3e0f-4a29-86e4-b9f8b244c852/IT_guidelines.pdf?table=block&id=1c5082a6-efc3-807f-a0a1-dd4bec95d02f&spaceId=b10e5498-687b-4e91-aab0-a262add27a16&expirationTimestamp=1743379200000&signature=1J-yJ4aMHbw52h0ZKSw12IiTpiDW21KZCwExIcb-eI4&downloadName=IT+guidelines.pdf">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSepqIXSmww2ZbvGMNkRxpw2jUXahXolOUOavpyq5L-kL51uBg/viewform">
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
