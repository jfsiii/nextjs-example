// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import type { Post } from "../../../data";
import { getPost } from "../../../data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post>
) {
  if (typeof req.query.id !== 'string') {
    throw new Error('A single post id is must be given')
  }
  const postId = parseInt(req.query.id, 10);
  console.log("/api/posts/[id]", postId);
  const post = await getPost(1);
  res.status(200).json(post);
}
