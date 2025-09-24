// app/department/page.tsx

import React from "react";
import Particles from "../components/particles";
import { Navigation } from "../components/nav";
import HorizontalScrollDepartments from "./components/HorizontalScrollDepartments"; // Updated import name
import cse from "./assets/cse.png";
import agri from "./assets/agri2.png";
import aids from "./assets/aids.png";
import bme from "./assets/bme.png";
import it from "./assets/it.png";
import ece from "./assets/ece.png";
import mech from "./assets/mech.png";
import type { StaticImageData } from "next/image";

type Department = {
  href: string;
  label: string;
  desc: string;
  image: string | StaticImageData;
};

// The data for your departments
const departments: Department[] = [
  {
    href: "/deprtment/cse-events",
    label: "CSE",
    desc: "CyberZen",
    image: cse,
  },
  {
    href: "/department/it-events",
    label: "IT",
    desc: "Tech Titans",
    image: it,
  },
  {
    href: "/department/aids-events",
    label: "AI & DS / AI & ML",
    desc: "Ai-Spartanz",
    image: aids,
  },
  {
    href: "/department/ece-events",
    label: "ECE",
    desc: "Electrosparks",
    image: ece,
  },
  {
    href: "/department/mech-events",
    label: "MECH",
    desc: "Royal Mech",
    image: mech,
  },
  {
    href: "/department/agri-events",
    label: "Agro",
    desc: "Agro wingz",
    image: agri,
  },
  {
    href: "/department/bme-events",
    label: "BME",
    desc: "BIOBUDS",
    image: bme,
  },
];

export default function DepartmentsPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-950 via-indigo-950 to-zinc-900/0 min-h-screen">
      <Navigation />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto pt-24 sm:pt-0">
        <h1 className="z-10 text-4xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-500 to-purple-400 pb-10">
          Our Departments
        </h1>
        {/* Render the new HorizontalScrollDepartments component */}
        <HorizontalScrollDepartments items={departments} />
      </div>
    </div>
  );
}