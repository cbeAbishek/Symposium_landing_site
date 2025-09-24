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
import { CardSlider } from "./card-slider";

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
    desc: "BIOBUDS",
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
      
      {/* Header Section */}
      <div className="container mx-auto px-4 pt-32 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Departments
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Explore our cutting-edge departments and discover innovation in every field
        </p>
      </div>

      {/* Crypto Card Slider */}
      <div className="container mx-auto px-4 pb-20">
        <CardSlider socials={socials} />
      </div>
      
      <IconsPage />
    </div>
  );
}
