import { IPostMetadata } from "./../types/posts";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "posts");

interface IAllPosts {
  metadata: IPostMetadata;
  content: string;
  slug: string;
}

export const getAllPosts = (): IAllPosts[] => {
  const allPosts: string[] = fs.readdirSync(contentDirectory);

  const mappedPosts = allPosts.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const fileContents = fs.readFileSync(
      path.join(contentDirectory, fileName),
      "utf8"
    );
    const { data, content } = matter(fileContents);

    const metadata: IPostMetadata = {
      title: data.title,
      date: new Date(data.date).toLocaleTimeString(),
      ...data,
    };

    return {
      metadata,
      content,
      slug,
    };
  });

  return mappedPosts.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );
};
