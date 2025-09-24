import departmentData from "./data";
import { Navigation } from "../../components/nav";
import Particles from "../../components/particles";
import Image from "next/image";

export default function DepartmentPage(props: any) {
  const { params } = props as { params: { dept: string } };
  const { dept } = params;
  const department = departmentData.find((d) => d.routerName === dept);

  if (!department) {
    return <div>Department not found</div>;
  }

  return (
    <div className="bg-gradient-to-tl sm:pt-0 lg:pt-40 p-8 from-zinc-950 via-indigo-950 to-zinc-900/0">
      <Navigation />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="flex flex-col items-center justify-center h-screen md:h-auto text-center space-y-4">
        <Image src={department.logo} alt="Logo" width={200} height={200} />
        <h1 className="text-4xl font-bold text-white">{department.title}</h1>
        <p className="text-lg text-white max-w-md">{department.description}</p>
        <div className="mt-6 animate-bounce text-7xl text-white">⬇️</div>
      </div>

      {department.events.map((event, index) => (
        <div
          key={index}
          className="flex justify-center items-center min-h-24 p-5"
        >
          <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row animate-fadeIn">
            <div className="md:w-1/2">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <h2 className="text-2xl font-bold text-gray-800">{event.title}</h2>
              <p className="text-gray-600 mt-2">{event.description}</p>
              <ul className="text-gray-500 text-sm mt-2">
                {Object.entries(event.guidelines).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {String(value)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export async function generateStaticParams() {
  return departmentData.map((d) => ({ dept: d.routerName }));
}