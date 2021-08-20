import { Post as IPost } from '../data';
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import React from 'react';

export function Post(post: IPost) {
  return (
      <Link key={post.id} href={`/posts/${post.id}`} passHref>
      <React.Fragment>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </React.Fragment>
    </Link>
  );
}
