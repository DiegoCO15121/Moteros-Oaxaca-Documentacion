import { getDocBySlug, getAllSlugs } from "@/lib/mdx";
import { use } from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map(slug => ({ slug }));
}

export default function DocPage({ params }: Props) {
  const { slug } = use(params); 

  if (!slug) {
    return <div>No document found</div>;
  }

  const { content } = getDocBySlug(slug);

  return (
    <div className="prose prose-slate max-w-4xl mx-auto p-8  ">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}