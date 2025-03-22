// import { notFound } from "next/navigation";
// import { allProjects } from "contentlayer/generated";
// import { Mdx } from "@/app/components/mdx";
// import { Header } from "./header";
// import "./mdx.css";
// import { ReportView } from "./view";
// import { Redis } from "@upstash/redis";

// export const revalidate = 60;

// const redis = Redis.fromEnv();

// // Update the return type for generateStaticParams
// export async function generateStaticParams() {
//   return allProjects
//     .filter((p) => p.published)
//     .map((p) => ({ slug: p.slug }));
// }

// // Fix the page component by using the correct type pattern for Next.js App Router
// export default async function PostPage({
//   params,
// }: {
//   params: { slug: string };
//   searchParams?: { [key: string]: string | string[] | undefined };
// }) {
//   if (!params?.slug) {
//     notFound();
//   }

//   const project = allProjects.find((project) => project.slug === params.slug);

//   if (!project) {
//     notFound();
//   }

//   const views = (await redis.get<number>(`pageviews:projects:${params.slug}`)) ?? 0;

//   return (
//     <div className="bg-zinc-50 min-h-screen">
//       <Header project={project} views={views} />
//       <ReportView slug={project.slug} />
      
//       <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
//         <Mdx code={project.body.code} />
//       </article>
//     </div>
//   );
// }