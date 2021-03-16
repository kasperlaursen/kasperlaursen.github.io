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

      <main className="space-y-4">
        <div>
          <Link href="/">
            <a className="flex items-center">
              <IoMdArrowRoundBack /> <b>Home</b>
            </a>
          </Link>
        </div>
        <h1 className="font-bold text-4xl text-gray-800">{title}</h1>
        <p>{date}</p>
        <p className="text-xl sm:leading-10 space-y-6 mb-6 ">
          {hydratedContent}
        </p>
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

  return {
    props: {
      ...metadata,
      date: `${new Date(metadata.date).toLocaleDateString()} ${new Date(
        metadata.date
      ).toLocaleTimeString()}`,
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
