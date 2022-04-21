import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../lib/mongoose/client";
import { UserT } from "../../../lib/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
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
