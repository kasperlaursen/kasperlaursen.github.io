import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import Label from "../../components/Label";
import { mockBlogPosts } from "../../lib/data";
import { IBlogPost } from "../../types/blog";

interface IBlogPostPageProps {
  post: IBlogPost;
}

const BlogPostPage: React.FC<IBlogPostPageProps> = ({ post }) => {
  const { title, content, date, tags } = post;
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main className="space-y-4">
        <h1 className="font-bold text-4xl text-gray-800">{title}</h1>
        <p>{date}</p>
        <p className="text-xl sm:leading-10 space-y-6 mb-6 ">{content}</p>
        {tags && tags.map((tag) => <Label>{tag}</Label>)}
      </main>
    </div>
  );
};

type PathParams = { slug: string };

export const getStaticProps: GetStaticProps<
  IBlogPostPageProps,
  PathParams
> = async (context) => {
  const { params } = context;
  console.log(context);
  return {
    props: {
      post: mockBlogPosts.find((post) => post.slug === params.slug),
    },
  };
};

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  return {
    paths: mockBlogPosts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export default BlogPostPage;
