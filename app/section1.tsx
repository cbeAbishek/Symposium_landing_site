import React, { useEffect } from "react";
import Particles from "./components/particles";
import AnimatedImage from "./image";
import FAQ from "./faq";

export default function Home2() {
  return (
    <>
      {typeof window !== "undefined" && (
        <Particles
          className="absolute inset-0 z-40 animate-fade-in"
          quantity={100}
        />
      )}
      <div
        style={{ maxWidth: "100%", minHeight: "100%" }}
        className="flex flex-col z-20 items-center overflow-hidden bg-gradient-to-tr from-zinc-950/20 via-teal-950 to-zinc-950/100"
      >
        <nav className="my-16 s animate-fade-in">
          <ul className="flex items-center text-6xl  justify-center ">
            <p className=" text-orange-600 pl-8 font-display">
              About Innoverse{" "}
            </p>
          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/3 via-zinc-300/50 to-zinc-300/0" />

        <p className="p-margin text-justify font-display text-lg text-zinc-50 t animate-fade-in">
          Welcome to Innoverse , the flagship national-level symposium hosted by
          the PPG Institute of Technology ! Celebrated annually, Innoverse is a
          vibrant platform that brings together students, professionals, and
          innovators from across the country to showcase their talents in both
          technical and non-technical domains. Organized department-wise, this
          symposium features over 35+ diverse events , ranging from cutting-edge
          hackathons, coding challenges, robotics, and research paper
          presentations to creative pursuits like photography, debates, quizzes,
          and cultural performances.
        </p>

        <p className="p-margin mt-10 text-lg text-justify font-display text-zinc-50 animate-fade-in">
          Innoverse fosters an environment of innovation, collaboration, and
          healthy competition. Participants get the opportunity to network with
          industry experts, gain hands-on experience, and enhance their skills
          while competing for exciting prizes and recognition. With its dynamic
          blend of events, Innoverse caters to every interest and passion,
          ensuring there’s something for everyone to explore and excel in. Join
          us as we celebrate creativity, intellect, and teamwork at Innoverse –
          where ideas transform into reality! Whether you're a tech enthusiast
          or a creative mind, mark your calendars and be part of this
          extraordinary journey. For more details on event schedules,
          registration, and participation guidelines, stay tuned to our website.
          Let’s innovate, inspire, and ignite the spark of excellence together!
        </p>
        <br />
        <div >
          <AnimatedImage src="/Innuoverse2k25.jpg" />
        </div>
      <FAQ />

        <footer className="text-white py-6">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              <a href="https://cbeabishek.github.io/Abishek-portfoilio/">
                Desgined and Developed by Abishek CSE 3rd Year{" "}
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
