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

      <main className="space-y-3">
        <div className="hidden sm:block">
          <p>
            I'm a Web Developer living in Denmark 🇩🇰 working as a Software
            Engineer.
          </p>
          <p>
            I enjoy tinkering with 3D Printers 🖨️, Smart Home 💡 and Drone
            Photography 🚁.
          </p>
        </div>

        <div className="text-center pb-10 sm:hidden">
          <p>
            I'm a Web Developer living in Denmark 🇩🇰 working as a Software
            Engineer. I enjoy tinkering with 3D Printers 🖨️, Smart Home 💡 and
            Drone Photography 🚁.
          </p>
        </div>
        {posts &&
          posts.map(({ title, date, slug, excerpt }) => (
            <div key={slug}>
              <Link href={`/posts/${slug}`}>
                <a>
                  <div className="py-3 space-y-1 cursor-pointer">
                    <h2 className="text-2xl font-extrabold truncate">
                      {title}
                    </h2>
                    <p className="line-clamp-3">{excerpt}</p>
                    <small className="text-base">🗓️ {date}</small>
                  </div>
                </a>
              </Link>
            </div>
          ))}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const allPosts = getAllPosts();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formatDate = (date: Date): string =>
    `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

  return {
    props: {
      posts: allPosts.map(({ metadata, slug }) => ({
        ...metadata,
        slug,
        date: formatDate(new Date(metadata.date)),
      })),
    },
  };
};

export default Home;
function renderToString(content: string) {
  throw new Error("Function not implemented.");
}
