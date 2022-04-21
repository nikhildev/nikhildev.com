import { NextApiRequest, NextApiResponse } from "next";
import { firebaseAdmin } from "lib/firebaseAdmin";
import errorCatcher from "lib/common/errorCatcher";
import { connect } from "lib/mongoose/client";
import User from "lib/mongoose/models/user";
import { HttpResponses, NewPost, UserT } from "lib/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;
  const payload: NewPost = req.body;
  const idToken = req.headers?.authorization?.split(" ")[1];

  // TODO : Add common exception handling and response statuses and messages

  switch (method) {
    case "POST":
      if (!idToken) {
        console.error("No bearer token provided");
        return res.status(401).json({ error: HttpResponses.UNAUTHORIZED });
      }

      try {
        if (payload.title && payload.body) {
          const { PostModel } = await connect(); // connect to database
          try {
            const { uid } = await firebaseAdmin.auth().verifyIdToken(idToken);

            const user: UserT | null = await User.findOne({ uid }).lean();

            if (user && user.roles.includes("editor")) {
              PostModel.init();

              const post = new PostModel({
                title: payload.title,
                body: payload.body,
              });

              await post.save();

              return res.json(post);
            } else {
              console.error(
                "User does not have editor priviges to create post"
              );
              return res
                .status(401)
                .json({ error: HttpResponses.UNAUTHORIZED });
            }
          } catch (error) {
            console.log(error);

            return res.status(401).json({ error: HttpResponses.UNAUTHORIZED });
          }
        } else {
          console.error("No title or body provided");
          throw HttpResponses.BAD_REQUEST;
        }
      } catch (error) {
        console.log(error);

        return errorCatcher(res, error as Error);
      }

    default:
      res.status(400).json({ error: "No Response for This Request" });
  }
};

export default handler;
