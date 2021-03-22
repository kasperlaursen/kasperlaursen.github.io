import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";

import { MdxRemote } from "next-mdx-remote/types";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

import { IoMdArrowRoundBack } from "react-icons/io";

import { getAllPosts } from "../../lib/posts";
import Label from "../../src/general/Label";
import { IPostMetadata } from "../../types/posts";
import Link from "next/link";

interface IPostPageProps extends IPostMetadata {
  content: MdxRemote.Source;
}

const BlogPostPage: React.FC<IPostPageProps> = ({
  title,
  content,
  date,
  tags,
}) => {
  const hydratedContent = hydrate(content);

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="absolute top-6 left-6">
        <Link href="/">
          <a className="flex items-center">
            <IoMdArrowRoundBack /> <b>Home</b>
          </a>
        </Link>
      </div>

      <main className="space-y-4">
        <h1 className="font-bold text-3xl text-gray-800">{title}</h1>
        <p className="text-lg sm:leading-10 space-y-6 pb-6 ">
          {hydratedContent}
        </p>
        <small className="text-base opacity-60">{date}</small>
        {tags && tags.map((tag) => <Label>{tag}</Label>)}
      </main>
    </div>
  );
};

type PathParams = { slug: string };

export const getStaticProps: GetStaticProps<
  IPostPageProps,
  PathParams
> = async (context) => {
  const { params } = context;
  const allPosts = getAllPosts();
  const { metadata, content } = allPosts.find(
    (item) => item.slug === params.slug
  );
  const mdxSource = await renderToString(content);

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
      ...metadata,
      date: formatDate(new Date(metadata.date)),
      content: mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export default BlogPostPage;
