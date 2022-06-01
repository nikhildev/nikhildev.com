import { NextApiRequest, NextApiResponse } from "next";
import errorCatcher from "lib/common/errorCatcher";
import { connect } from "lib/mongoose/client";
import { PostDocument } from "lib/mongoose/models/post";
import { LeanDocument, Document } from "mongoose";
import { EditablePostContent, HttpResponses, RequestMethods } from "lib/types";
import { verifyFirebaseToken } from "lib/firebaseAdmin";
import { getIdTokenFromHeaders } from "lib/common/helpers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;
  const { slug } = req.query;
  const { PostModel } = await connect();
  const idToken = getIdTokenFromHeaders(req);

  switch (method) {
    case RequestMethods.GET:
      try {
        const post = (await PostModel.findOne({
          slug,
        }).lean()) as LeanDocument<PostDocument>;

        if (post && !post?.isPublished) {
          if (!idToken) {
            console.error("No bearer token provided");
            return res.status(401).json({ error: HttpResponses.UNAUTHORIZED });
          }
          const { uid } = await verifyFirebaseToken(idToken);

          if (uid && uid !== post.author.uid) {
            return res.status(404).json({ error: HttpResponses.NOT_FOUND });
          }
        } else {
          return res.json(post);
        }
      } catch (error) {
        return errorCatcher(res, error as Error);
      }

    case RequestMethods.PATCH:
      if (!idToken) {
        console.error("No bearer token provided");
        return res.status(401).json({ error: HttpResponses.UNAUTHORIZED });
      }

      try {
        const payload: EditablePostContent = req.body;
        const { uid } = await verifyFirebaseToken(idToken);

        const post = await PostModel.findOne({
          slug,
        });

        if (post && post.author.uid !== uid) {
          return res.status(401).json({ error: HttpResponses.UNAUTHORIZED });
        } else {
          const update = {
            ...(payload.title && { title: payload.title }),
            ...(payload.body && { body: payload.body }),
            ...(payload.isPublished !== undefined && {
              isPublished: !!payload.isPublished,
            }),
          };

          return res.json(
            await PostModel.findOneAndUpdate({ slug }, update, {
              new: true,
            })
          );
        }
      } catch (error) {
        return errorCatcher(res, error as Error);
      }
    default:
      res.status(400).json({ error: "No Response for This Request" });
  }
};

export default handler;
