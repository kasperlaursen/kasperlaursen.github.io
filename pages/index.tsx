import Head from "next/head";
import Link from "next/link";
import { mockBlogPosts } from "../lib/data";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Laursen.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://laursen.dev">Laursen.dev</a>
        </h1>
        <div>
          {mockBlogPosts.map(({ title, date, content, slug }) => (
            <div key={slug}>
              <b>
                <Link href={`/blog/${slug}`}>{title}</Link>
              </b>
              <p>
                <small>{date}</small>
              </p>
              <p>{content}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
