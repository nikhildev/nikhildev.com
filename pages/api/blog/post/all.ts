import { NextApiRequest, NextApiResponse } from "next";
import { stringToBoolean } from "../../../../utils/common/helpers";
import { getPostBodyPreview } from "../../../../utils/common/postPreview";
import { connect } from "../../../../utils/mongoose/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;
  const queryParams = req.query;

  const catcher = (error: Error) => res.status(400).json({ error });

  switch (method) {
    case "GET":
      try {
        const { PostModel } = await connect(); // connect to database

        return res.json(
          await PostModel.find()
            .lean()
            .limit(Number(queryParams.limit) || 100)
            .transform((docs) =>
              docs.map((i) => ({
                ...i,
                body: stringToBoolean(queryParams.preview as string)
                  ? getPostBodyPreview(i.body)
                  : i.body,
              }))
            )
        );
      } catch (error) {
        return catcher(error as Error);
      }

    default:
      res.status(400).json({ error: "No Response for This Request" });
  }
};

export default handler;
