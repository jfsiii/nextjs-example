import type { /* GetStaticPropsContext, */ GetStaticPropsResult } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { getPosts } from "../data";
import type { Post as IPost } from "../data";
import styles from "../styles/Home.module.css";
import { Post } from "../components/Post";

interface PostsProps {
  posts: IPost[];
}
type PostPropsResult = GetStaticPropsResult<PostsProps>;

export async function getServerSideProps(): Promise<PostPropsResult> {
// context: GetStaticPropsContext
  const posts = await getPosts();

  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}

export default function Posts(props: PostsProps) {
  const posts = props.posts.slice(0, 20);

  return (
    <div className={styles.container} style={{ height: "unset" }}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Posts</h1>

        <section className={styles.description}>
          API data from{" "}
          <Link href="https://jsonplaceholder.typicode.com/">
            JSON Placeholder
          </Link>
        </section>

        <div className={styles.grid}>{posts.map(Post)}</div>
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
