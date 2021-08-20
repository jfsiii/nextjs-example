// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { getPosts } from "../../data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const posts = await getPosts();
  res.status(200).json(posts);
}
