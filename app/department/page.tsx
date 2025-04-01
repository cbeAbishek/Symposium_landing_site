import Link from "next/link";
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import cse from "./assets/cse.png";
import agri from "./assets/agri2.png";
import aids from "./assets/aids.png";
import bme from "./assets/bme.png";
import it from "./assets/it.png";
import ece from "./assets/ece.png";
import mech from "./assets/mech.png";
import IconsPage from "./deptsec1";
import Particles from "../components/particles";
import { Navigation } from "../components/nav";
import { Card } from "./card";

const socials = [
  {
    href: "/cse-events", // Updated path name
    label: "CSE",
    desc: "CyberZen",
    event1: "Paper Presentation",
    event2: "HackerRank",
    event3: "WebDesging",
    event4: "E-Football",
    event5: "Fire Crackers",
    image: cse,
  },
  {
    href: "/it-events",
    label: "IT",
    desc: "Tech Titans",
    event1: "Paper Presentation",
    event2: "BEST MANAGER",
    event3: "WEB WEAVERS",
    event4: "E-SPORTS-FREE FIRE",
    event5: "GUESS IT RIGHT",
    image: it,
  },
  {
    href: "/aids-events",
    label: "AI & DS / AI & ML",
    desc: "Ai-Spartanz",
    event1: "WEBGENIX",
    event2: "TECHTALK",
    event3: "Code Detox",
    event4: "Harmonic Flow",
    event5: "Instaflicks",
    image: aids,
  },
  {
    href: "ece-events",
    label: "ECE",
    desc: "Electrosparks",
    event1: "Paper Presentation",
    event2: "Circuit Debugging",
    event3: "Clash Masters",
    event4: "Short film",
    event5: "Adventure Stash",
    image: ece,
  },
  {
    href: "mech-events",
    label: "MECH",
    desc: "Royal Mech",
    event1: "Paper presentation",
    event2: "Quiz",
    event3: "Cad modeling",
    event4: "Mr mechanic",
    event5: "and more...",
    image: mech,
  },
  {
    href: "agri-events",
    label: "Agri",
    desc: "Agro wingz",
    event1: "Paper presentation",
    event2: "Quiz",
    event3: "Project Expo",
    event4: "Segment identifier",
    event5: "Sharp your pencil",
    image: agri,
  },
  {
    href: "bme-events",
    label: "BME",
    desc: "Club Name",
    event1: "Paper presentation",
    event2: "Quizz",
    event3: "Ideathon",
    event4: "Junkyard Art",
    event5: "Doodle War",
    image: bme,
  },
];

export default function Example() {
  return (
    <div className="bg-gradient-to-tl sm:pt-0 lg:pt-40 p-8 from-zinc-950 via-indigo-950 to-zinc-900/0">
      <Navigation />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-10">
          {socials.map((s) => (
            <Card key={s.label}>
              <div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-10 md:p-16">
                <span
                  className="absolute w-px  bg-gradient-to-b from-zinc-900 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <div className="z-10 flex flex-col items-center">
                  <Image src={s.image} alt="Logo" width={200} height={200} />
                  <span className="text-xl mt-6 text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                  <span className="text-xl mt-3 text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.desc}
                  </span>
                  <span className="text-xl mt-1 font-medium duration-150 lg:text-1xl text-zinc-200 group-hover:text-white font-display">
                    {s.event1}
                  </span>
                  <span className="text-xl mt-1 font-medium duration-150 lg:text-1xl text-zinc-200 group-hover:text-white font-display">
                    {s.event2}
                  </span>
                  <span className="text-xl mt-1 font-medium duration-150 lg:text-1xl text-zinc-200 group-hover:text-white font-display">
                    {s.event3}
                  </span>
                  <span className="text-xl mt-1 font-medium duration-150 lg:text-1xl text-zinc-200 group-hover:text-white font-display">
                    {s.event4}
                  </span>
                  <span className="text-xl mt-1 font-medium duration-150 lg:text-1xl text-zinc-200 group-hover:text-white font-display">
                    {s.event5}
                  </span>
                  <div className="flex justify-center  pt-10">
                    <Link href={s.href}  className="button-link">
                      <button className="card-button  inline-flex items-center group">
                        More Details
                        <span className="ml-2 transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
                          <ArrowRight />
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <IconsPage />
    </div>
  );
}
