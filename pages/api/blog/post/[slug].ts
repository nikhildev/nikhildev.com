import { NextApiRequest, NextApiResponse } from "next";
import errorCatcher from "../../../../utils/common/errorCatcher";
import { connect } from "../../../../utils/mongoose/client";
import { PostT } from "../../../../utils/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;
  const { slug } = req.query;

  switch (method) {
    case "GET":
      try {
        const { PostModel } = await connect(); // connect to database

        return res.json(
          await PostModel.findOne({
            slug,
          }).lean()
        );
      } catch (error) {
        return errorCatcher(res, error as Error);
      }

    default:
      res.status(400).json({ error: "No Response for This Request" });
  }
};

export default handler;
