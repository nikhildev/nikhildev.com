import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../lib/mongoose/client";
import { ResponseFuncs, UserT } from "../../../lib/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //capture request method, we type it as a key of ResponseFunc to reduce typing later
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  const { id } = req.query;

  const { UserModel } = await connect(); // connect to database
  const userById: UserT | null = await UserModel.findById(id);
  if (userById) {
    res.json({
      displayName: userById.displayName,
      photoURL: userById.photoURL,
    });
  } else {
    res.status(400).json({ error: "No Response for This Request" });
  }
};

export default handler;
