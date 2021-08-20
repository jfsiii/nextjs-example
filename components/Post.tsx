import Link from "next/link";
import React from "react";

import type { Post as IPost } from "../data";
import "../styles/Home.module.css";

export function Post(post: IPost) {
  return (
    <Link key={post.id} href={`/posts/${post.id}`} passHref>
      <a>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </a>
    </Link>
  );
}
