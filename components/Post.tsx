import { Post as IPost } from '../data';
import Link from 'next/link'
import styles from '../styles/Home.module.css';

export function Post(post: IPost) {
  return <Link key={post.id} href={`/posts/${post.id}`} passHref>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
  </Link>;
}
