import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

export const revalidate = 60;

const redis = Redis.fromEnv();

export async function generateStaticParams() {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({ slug: p.slug }));
}

// ✅ Explicitly define the type for params to avoid the Promise type issue
interface PostPageProps {
  params: Awaited<ReturnType<typeof generateStaticParams>>[number];
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const views = (await redis.get<number>(`pageviews:projects:${slug}`)) ?? 0;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={views} />
      <ReportView slug={project.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={project.body.code} />
      </article>
    </div>
  );
}
