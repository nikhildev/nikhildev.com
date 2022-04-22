import { NextApiResponse } from "next";

const errorCatcher = (res: NextApiResponse, error: Error) =>
  res.status(400).json({ error });

export default errorCatcher;
