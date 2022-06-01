import errorCatcher from "lib/common/errorCatcher";
import { getIdTokenFromHeaders, stringToBoolean } from "lib/common/helpers";
import { getPostBodyPreview } from "lib/common/postPreview";
import { verifyFirebaseToken } from "lib/firebaseAdmin";
import { connect } from "lib/mongoose/client";
import { PostDocument } from "lib/mongoose/models/post";
import { HttpResponses, RequestMethods } from "lib/types";
import { LeanDocument } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;
  const queryParams = req.query;
  const { PostModel } = await connect();
  const idToken = getIdTokenFromHeaders(req);

  switch (method) {
    case RequestMethods.GET:
      if (!idToken) {
        console.error("No bearer token provided");
        return res.status(401).json({ error: HttpResponses.UNAUTHORIZED });
      }

      try {
        const { uid } = await verifyFirebaseToken(idToken);
        return res.json(
          await PostModel.find({ "author.uid": uid })
            .lean()
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
        return errorCatcher(res, error as Error);
      }

    default:
      res.status(400).json({ error: "No Response for This Request" });
  }
};

export default handler;
