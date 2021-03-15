import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>Laursen.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          About <a href="https://laursen.dev">Laursen.dev</a>
        </h1>
      </main>
    </div>
  );
}
