import { NextApiResponse } from "next";

export default (res: NextApiResponse, error: Error) =>
  res.status(400).json({ error });
