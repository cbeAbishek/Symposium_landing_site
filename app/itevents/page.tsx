import React from "react";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import dummy from "./dummy.jpg";

export default function CSEEvent() {
  return (
    <div className="bg-gradient-to-tl sm:pt-0 lg:pt-40 p-8 from-zinc-950 via-indigo-950 to-zinc-900/0">
      <Navigation />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="container flex items-center justify-center min-h-screen px-1 mx-auto">
        <div className="text-center ">
          <h1 className="text-4xl font-bold text-white">CSE Event</h1>
          <p className="mt-1 text-xl text-zinc-400">
            Details about the CSE event will be displayed Down.
          </p>
        </div>

      </div>
      {/* event 1 */}
      <div className="flex justify-center items-center min-h-screen p-4">
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
            <h2 className="text-2xl font-bold text-gray-800">Paper Presentation</h2>
            <p className="text-gray-600 mt-2">
              This is a brief description of the event, explaining its purpose
              and key details.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> Please follow the event rules for a
              great experience.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all">
                Guidlines
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-all">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* event 2 */}
      <div className="flex justify-center items-center min-h-screen p-4">
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
              This is a brief description of the event, explaining its purpose
              and key details.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> Please follow the event rules for a
              great experience.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all">
                Guidlines
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-all">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* event 3 */}
      <div className="flex justify-center items-center min-h-screen p-4">
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
              This is a brief description of the event, explaining its purpose
              and key details.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> Please follow the event rules for a
              great experience.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all">
                Guidlines
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-all">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* event 4 */}
      <div className="flex justify-center items-center min-h-screen p-4">
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
              This is a brief description of the event, explaining its purpose
              and key details.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> Please follow the event rules for a
              great experience.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all">
                Guidlines
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-all">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* event 5 */}
      <div className="flex justify-center items-center min-h-screen p-4">
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
              This is a brief description of the event, explaining its purpose
              and key details.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Guidelines:</strong> Please follow the event rules for a
              great experience.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all">
                Guidlines
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-all">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
