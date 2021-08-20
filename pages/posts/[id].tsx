import type { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import type { Post as IPost } from '../../data';
import { getPost } from '../../data';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { Post } from '../../components/Post';

interface PostProps {
  post: IPost
}

export async function getServerSideProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<PostProps>>  {
  const givenId = Array.isArray(context.params.id) ? context.params.id.pop() : context.params.id;
  const postId = parseInt(givenId, 10);
  const post = await getPost(postId);
  
  return {
    props: {
      post
    }, // will be passed to the page component as props
  }  
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
        <h1 className={styles.title}>
          {post.title}
        </h1>

        <section className={styles.description}>
          {post.body}
        </section>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

