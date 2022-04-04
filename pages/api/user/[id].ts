import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/mongoose/client";
import { ResponseFuncs, UserT } from "../../../utils/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //capture request method, we type it as a key of ResponseFunc to reduce typing later
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  const { id } = req.query;

  const { User } = await connect(); // connect to database
  const userById: UserT | null = await User.findById(id);
  if (userById) {
    res.json({
      displayName: userById.displayName,
    });
  } else {
    res.status(400).json({ error: "No Response for This Request" });
  }
};

export default handler;
