"use client";
import { Github, Mail, Twitter, PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Particles from "../components/particles2";

const socials = [
  {
    icon: <PhoneCallIcon size={25} />,
    href: "tel:+917904823782",
    label: "+91 79048 23782",
    labelname: "Mrs. A. Jenifa",
    handle: "CSE - Coordinator",
  },
  {
    icon: <PhoneCallIcon size={25} />,
    href: "tel:+917871012810",
    label: "+91 78710 12810",
    labelname: "Mrs. M. Ramya",
    handle: "IT - Coordinator",
  },
  {
    icon: <PhoneCallIcon size={25} />,
    href: "tel:+916374948067",
    label: "+91 63749 48067",
    labelname: "Mrs. A. Yuvarani",
    handle: "AI & DS-Coordinator",
  },
  {
    icon: <PhoneCallIcon size={25} />,
    href: "tel:+919585480700",
    label: "+91 95854 80700",
    labelname: " Mr. M. Mohan",
    handle: "MECH - Coordinator",
  },
  {
    icon: <PhoneCallIcon size={25} />,
    href: "tel:+917092964232",
    label: "+91 70929 64232",
    labelname: "Mr.MOHAN",
    handle: "ECE - Coordinator",
  },
  {
    icon: <PhoneCallIcon size={25} />,
    href: "tel:+918072965471",
    label: "+91 80729 65471",
    labelname: "Mr.G.Udhaya kumar",
    handle: "AGRI - Coordinator",
  },
  {
    icon: <PhoneCallIcon size={25} />,
    href: "tel:+916374467626",
    label: "+91 63744 67626",
    labelname: "K.kaaviyakanth",
    handle: "BME - Coordinator",
  },
];

export default function Example() {
  return (
    <div className=" bg-gradient-to-tl sm:pt-0 lg:pt-20  p-8 from-emerald-950 via-indigo-950 to-teal-900/0">
      <Navigation />
      <Particles
        className="absolute inset-0 z-10 animate-fade-in"
        quantity={200}
      />
      <div className="container flex items-center  justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 z-40 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-8">
          {socials.map((s, index) => (
            <Card key={index}>
              <Link
                href={s.href}
                target="_blank"
                className=" relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 p-5 lg:pb-12 lg:pt-10  md:p-16"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="text-xl font-medium duration-150 lg:text-1xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                  <span className="mt-1 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.labelname}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
