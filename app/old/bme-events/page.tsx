import React from "react";
import { Navigation } from "../../components/nav";
import Particles from "../../components/particles";
import dummy from "./dummy.jpg";
import ev1 from "./ev1.jpg";
import ev2 from "./ev2.jpg";
import ev3 from "./ev3.jpg";
import ev4 from "./ev4.jpg";
import ev5 from "./ev5.jpg";
import club from "../../department/assets/bme.png";
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
        <h1 className="text-4xl font-bold text-white">BME - Events</h1>
        <h3 className="text-4xl font-bold text-white">BIOBUDS</h3>
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
              Join us for an exciting Paper Presentation Event, where innovative
              ideas and research take center stage! This event provides a
              platform for students, researchers, and professionals to showcase
              their analytical and presentation skills while sharing knowledge
              on diverse topics.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> Presentation should be completed
              within 8 minutes, followed by 2 minutes for queries. Each team can
              have a maximum of 2 members. PPTs must be clear and professional.
              Abstracts and presentations should be submitted via
              hodbiomedppgit@gmail.com. Ensure that all presentation materials
              are submitted before the deadline.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="https://drive.google.com/file/d/1---ITW1OBWTvMdAbNL0Ec0ZBrnmf-ASx/view?usp=drivesdk">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKZ5Fbik27lbgcgwTlvys_3qtrA4nA8mbcIbVQGI19bSP-mQ/viewform">
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
            <h2 className="text-2xl font-bold text-gray-800">Quizz</h2>
            <p className="text-gray-600 mt-2">
              Get ready to put your knowledge to the test in our thrilling Quiz
              Competition! This event is designed to challenge your intellect,
              quick thinking, and teamwork while making learning fun and
              engaging. Whether you're a trivia enthusiast or just love a good
              challenge, this is the perfect opportunity to
              showcase your skills!
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> Quiz (BIONICS 2K25) Guidelines: The
              quiz consists of 3 rounds: Round 1: Teams select answers from
              multiple-choice options. 1 mark awarded for each correct answer.
              Double marking is not allowed. Round 2: Only one participant per
              team answers at a time. The first answer is final. 30 seconds is
              given per question. No passing is allowed. Each team gets 5
              questions. Round 3: Passing is allowed. 5 marks awarded for
              correct answers. 2 marks deducted for incorrect answers.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="https://drive.google.com/file/d/1---ITW1OBWTvMdAbNL0Ec0ZBrnmf-ASx/view?usp=drivesdk">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKZ5Fbik27lbgcgwTlvys_3qtrA4nA8mbcIbVQGI19bSP-mQ/viewform">
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
            <h2 className="text-2xl font-bold text-gray-800">Ideathon</h2>
            <p className="text-gray-600 mt-2">
              Unleash your creativity and problem-solving skills at our Ideathon
              – a high-energy brainstorming event where innovative minds come
              together to develop groundbreaking ideas! Whether you're an
              entrepreneur, student, or tech enthusiast, this is your chance to
              turn ideas into potential solutions.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> PParticipants must present an
              innovative idea with a clear problem-solving strategy. Teams can
              have 1 or 2 members. PPT presentation is optional. Themes will be
              provided to each team before the competition. The focus is on
              creativity, feasibility, and impact.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="https://drive.google.com/file/d/1---ITW1OBWTvMdAbNL0Ec0ZBrnmf-ASx/view?usp=drivesdk">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKZ5Fbik27lbgcgwTlvys_3qtrA4nA8mbcIbVQGI19bSP-mQ/viewform">
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
            <h2 className="text-2xl font-bold text-gray-800">Junkyard Art</h2>
            <p className="text-gray-600 mt-2">
              Join us for a one-of-a-kind Junkyard Art Festival, where
              creativity meets sustainability! This unique event celebrates the
              beauty of repurposed materials, turning discarded items into
              stunning works of art. Experience live art installations,
              interactive workshops, and exhibitions showcasing sculptures,
              paintings, and mixed media pieces crafted from salvaged materials.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong>
              1. Team Formation: Maximum of 2 members per team. 2. Time Limit:
              15 to 20 minutes for creating the artwork. 3. Art Theme:
              Participants must create artwork based on the given theme of
              sustainability. 4. Tools & Materials: Participants should bring
              their own tools for crafting.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="https://drive.google.com/file/d/1---ITW1OBWTvMdAbNL0Ec0ZBrnmf-ASx/view?usp=drivesdk">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKZ5Fbik27lbgcgwTlvys_3qtrA4nA8mbcIbVQGI19bSP-mQ/viewform">
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
            <h2 className="text-2xl font-bold text-gray-800">Doodle War</h2>
            <p className="text-gray-600 mt-2">
              Get ready to unleash your creativity in the most epic Doodle War!
              This high-energy, fast-paced art battle pits doodlers of all skill
              levels against each other in a series of themed sketch challenges.
              Armed with only markers and imagination, participants will compete
              in timed rounds, creating spontaneous masterpieces based on
              surprise prompts.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong>
              Teams should have 2 to 4 members. The competition consists of 3
              rounds: Round 1 - Draw & Find: One teammate draws an image while
              others guess. Round 2 - Word Puzzle: Form words from given
              letters. Round 3 - Story Making: Create a story based on a given
              image.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="https://drive.google.com/file/d/1---ITW1OBWTvMdAbNL0Ec0ZBrnmf-ASx/view?usp=drivesdk">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKZ5Fbik27lbgcgwTlvys_3qtrA4nA8mbcIbVQGI19bSP-mQ/viewform">
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
