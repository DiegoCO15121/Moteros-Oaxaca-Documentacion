import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsPath = path.join(process.cwd(), "docs");

export interface DocData {
  content: string;
  frontmatter: Record<string, any>;
}

export function getDocBySlug(slug: string): DocData {
  const decodedSlug = decodeURIComponent(slug); 

  const filePath = path.join(docsPath, `${decodedSlug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const source = fs.readFileSync(filePath, "utf-8");

  const { content, data } = matter(source);

  return {
    content,
    frontmatter: data,
  };
}

export function getAllSlugs(): string[] {
  return fs.readdirSync(docsPath).map(file => file.replace(".md", ""));
}