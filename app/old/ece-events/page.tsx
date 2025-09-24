import React from "react";
import { Navigation } from "../../components/nav";
import Particles from "../../components/particles";
import dummy from "./dummy.jpg";
import ev1 from "./ev1.jpg";
import ev2 from "./ev2.jpg";
import ev3 from "./ev3.jpg";
import ev4 from "./ev4.jpg";
import ev5 from "./ev5.jpg";
import club from "../../department/assets/ece.png";
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
        <h1 className="text-4xl font-bold text-white">ECE - Events</h1>
        <h3 className="text-4xl font-bold text-white">Electro Sparks</h3>
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
              A paper presentation is a structured talk where researchers or
              students present their findings, ideas, or innovations to an
              audience using slides, visuals, and explanations, typically at
              conferences, seminars, or academic events.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> In a paper presentation, a team can
              have a maximum of 4 members or be presented solo. The presentation
              time is a maximum of 8 minutes, followed by 2 minutes for
              questions.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="https://www.pdffiller.com/jsfiller-desk18/?traceparent=00-06ca987ea956456de4c15f12b060fc60-1fc0df3dee43fd4a-01&flat_pdf_quality=high&isShareViaLink=1&requestHash=efa02fcf9a8043df13a41e0e273fa7dbc76356d2446865709cda91e437658d58&lang=en&projectId=1813629678&richTextFormatting=true&jsf-page-rearrange-v2=true&jsf-redesign-full=true&isSkipEditorLoadFrequency=true&jsf-probability-70=true&jsf-socket-io=false&jsf-simplified-modes-iteration-1=true&jsf-offline-mode=false&jsf-fake-edit-stream-editing=false&routeId=06c6edda16e4cdd3ef95e76777ed752c#59b78f4d7b1d4a91b6e2f7fee321ce43">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-5Dbx8QiJYTsx_hJ8u-UoC5Bsik-rSpJx7PVTszb825ITew/viewform">
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
            <h2 className="text-2xl font-bold text-gray-800">
              Circuit Debugging
            </h2>
            <p className="text-gray-600 mt-2">
              A circuit debugging competition challenges participants to
              identify and fix faults in electronic circuits within a given
              time. It tests problem-solving skills, technical knowledge, and
              efficiency in troubleshooting electrical and electronic systems.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> Circuit debugging can be done in a
              team of up to 3 members. It consists of 3 rounds.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="https://www.pdffiller.com/jsfiller-desk18/?traceparent=00-06ca987ea956456de4c15f12b060fc60-1fc0df3dee43fd4a-01&flat_pdf_quality=high&isShareViaLink=1&requestHash=efa02fcf9a8043df13a41e0e273fa7dbc76356d2446865709cda91e437658d58&lang=en&projectId=1813629678&richTextFormatting=true&jsf-page-rearrange-v2=true&jsf-redesign-full=true&isSkipEditorLoadFrequency=true&jsf-probability-70=true&jsf-socket-io=false&jsf-simplified-modes-iteration-1=true&jsf-offline-mode=false&jsf-fake-edit-stream-editing=false&routeId=06c6edda16e4cdd3ef95e76777ed752c#59b78f4d7b1d4a91b6e2f7fee321ce43">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-5Dbx8QiJYTsx_hJ8u-UoC5Bsik-rSpJx7PVTszb825ITew/viewform">
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
            <h2 className="text-2xl font-bold text-gray-800">Clash Masters</h2>
            <p className="text-gray-600 mt-2">
              Clash Masters is a competitive speaking event where participants
              discuss given topics without repeating points, testing their quick
              thinking, clarity, and time management skills within a set
              duration.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> Clash Masters is a game where players
              discuss given topics within a time limit without repeating points.
              Each team can have a maximum of four members.Maximum 4 minutes to
              talk.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="https://www.pdffiller.com/jsfiller-desk18/?traceparent=00-06ca987ea956456de4c15f12b060fc60-1fc0df3dee43fd4a-01&flat_pdf_quality=high&isShareViaLink=1&requestHash=efa02fcf9a8043df13a41e0e273fa7dbc76356d2446865709cda91e437658d58&lang=en&projectId=1813629678&richTextFormatting=true&jsf-page-rearrange-v2=true&jsf-redesign-full=true&isSkipEditorLoadFrequency=true&jsf-probability-70=true&jsf-socket-io=false&jsf-simplified-modes-iteration-1=true&jsf-offline-mode=false&jsf-fake-edit-stream-editing=false&routeId=06c6edda16e4cdd3ef95e76777ed752c#59b78f4d7b1d4a91b6e2f7fee321ce43">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-5Dbx8QiJYTsx_hJ8u-UoC5Bsik-rSpJx7PVTszb825ITew/viewform">
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
            <h2 className="text-2xl font-bold text-gray-800">Short film</h2>
            <p className="text-gray-600 mt-2">
              A short film is a brief, creative cinematic piece that tells a
              story or conveys a message within a limited time, often showcasing
              innovative storytelling and filmmaking techniques.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> The short film should have a maximum
              duration of 10 minutes and must be presented decently.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="https://www.pdffiller.com/jsfiller-desk18/?traceparent=00-06ca987ea956456de4c15f12b060fc60-1fc0df3dee43fd4a-01&flat_pdf_quality=high&isShareViaLink=1&requestHash=efa02fcf9a8043df13a41e0e273fa7dbc76356d2446865709cda91e437658d58&lang=en&projectId=1813629678&richTextFormatting=true&jsf-page-rearrange-v2=true&jsf-redesign-full=true&isSkipEditorLoadFrequency=true&jsf-probability-70=true&jsf-socket-io=false&jsf-simplified-modes-iteration-1=true&jsf-offline-mode=false&jsf-fake-edit-stream-editing=false&routeId=06c6edda16e4cdd3ef95e76777ed752c#59b78f4d7b1d4a91b6e2f7fee321ce43">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-5Dbx8QiJYTsx_hJ8u-UoC5Bsik-rSpJx7PVTszb825ITew/viewform">
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
            <h2 className="text-2xl font-bold text-gray-800">
              Adventure Stash
            </h2>
            <p className="text-gray-600 mt-2">
              Adventure Stash is a fun film quiz game where participants test
              their movie knowledge through exciting challenges, trivia, and
              puzzles, making it an engaging and entertaining experience.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> Adventure Stash is a fun quiz game
              with a maximum of four members per team and up to three rounds. It
              is based on general knowledge, cinematic questions, and songs.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="https://www.pdffiller.com/jsfiller-desk18/?traceparent=00-06ca987ea956456de4c15f12b060fc60-1fc0df3dee43fd4a-01&flat_pdf_quality=high&isShareViaLink=1&requestHash=efa02fcf9a8043df13a41e0e273fa7dbc76356d2446865709cda91e437658d58&lang=en&projectId=1813629678&richTextFormatting=true&jsf-page-rearrange-v2=true&jsf-redesign-full=true&isSkipEditorLoadFrequency=true&jsf-probability-70=true&jsf-socket-io=false&jsf-simplified-modes-iteration-1=true&jsf-offline-mode=false&jsf-fake-edit-stream-editing=false&routeId=06c6edda16e4cdd3ef95e76777ed752c#59b78f4d7b1d4a91b6e2f7fee321ce43">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Guidelines
                  </span>
                </button>
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-5Dbx8QiJYTsx_hJ8u-UoC5Bsik-rSpJx7PVTszb825ITew/viewform">
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
