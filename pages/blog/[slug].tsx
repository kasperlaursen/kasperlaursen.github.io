import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{title}</h1>
        <div>
          <p>
            <small>{date}</small>
          </p>
          <p>{content}</p>
          {tags && tags.map((tag) => `${tag}, `)}
        </div>
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
