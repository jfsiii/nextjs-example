import type { GetStaticPropsContext, GetServerSidePropsResult } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";

import type { Post as IPost } from "../../data";
import { getPost } from "../../data";
import styles from "../../styles/Home.module.css";

interface PostProps {
  post: IPost;
}

export async function getServerSideProps(
  {res, params}: GetStaticPropsContext
): Promise<GetServerSidePropsResult<PostProps>> {
  if (typeof params?.id !== 'string') {
    throw new Error('A single post id is must be given')
  }
  const postId = parseInt(params?.id, 10);
  const post = await getPost(postId);
  res.setHeader('Cache-Control', 's-maxage=59, stale-while-revalidate=599')
  return {
    props: {
      post,
    }, // will be passed to the page component as props
  };
}

export default function PostPage(props: PostProps) {
  const post = props.post;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{post.title}</h1>

        <section className={styles.description}>{post.body}</section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
