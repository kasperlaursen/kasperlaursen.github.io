import React from "react";
import Head from "next/head";
import Link from "next/link";
import Card from "../components/Card";
import { mockBlogPosts } from "../lib/data";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Laursen.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="space-y-8">
        {mockBlogPosts.map(({ title, date, content, slug }) => (
          <div>
            <Link href={`/blog/${slug}`}>
              <a>
                <Card key={slug} className="p-3 space-y-1 cursor-pointer">
                  <p className="font-bold truncate">{title}</p>
                  <p className="line-clamp-3">{content}</p>
                  <p>
                    <small>{date}</small>
                  </p>
                </Card>
              </a>
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;
