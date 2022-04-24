import { NextApiRequest, NextApiResponse } from "next";
import { stringToBoolean } from "../../../../lib/common/helpers";
import { getPostBodyPreview } from "../../../../lib/common/postPreview";
import { connect } from "../../../../lib/mongoose/client";
import { PostDocument } from "../../../../lib/mongoose/models/post";
import { LeanDocument } from "mongoose";
import { RequestMethods } from "lib/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;
  const queryParams = req.query;

  const catcher = (error: Error) => res.status(400).json({ error });

  switch (method) {
    case RequestMethods.GET:
      try {
        const { PostModel } = await connect(); // connect to database

        return res.json(
          await PostModel.find({ isPublished: true })
            .lean()
            .limit(Number(queryParams.limit) || 100)
            .transform((docs: LeanDocument<PostDocument>[]) =>
              docs.map((i: LeanDocument<PostDocument>) => ({
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
