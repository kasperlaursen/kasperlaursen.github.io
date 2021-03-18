import React from "react";
import Head from "next/head";
import Link from "next/link";
import Card from "../src/general/Card";
import { IFullPost } from "../types/posts";
import { GetStaticProps } from "next";
import { getAllPosts } from "../lib/posts";

interface IHomeProps {
  posts: IFullPost[];
}

const Home: React.FC<IHomeProps> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Laursen.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="space-y-8">
        <div className="grid grid-cols-2 gap-4">
          {posts &&
            posts.map(({ title, date, slug, excerpt }) => (
              <div>
                <Link href={`/posts/${slug}`}>
                  <a>
                    <Card key={slug} className="p-3 space-y-1 cursor-pointer">
                      <p className="font-bold truncate">{title}</p>
                      <p className="line-clamp-3">{excerpt}</p>
                      <p>
                        <small>{date}</small>
                      </p>
                    </Card>
                  </a>
                </Link>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ metadata, slug }) => ({
        ...metadata,
        slug,
        date: `${new Date(metadata.date).toLocaleDateString()} ${new Date(
          metadata.date
        ).toLocaleTimeString()}`,
      })),
    },
  };
};

export default Home;
function renderToString(content: string) {
  throw new Error("Function not implemented.");
}
