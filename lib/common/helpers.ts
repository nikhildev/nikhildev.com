import { NextApiRequest } from "next";

export const stringToBoolean = (text: string) =>
  String(text).toLowerCase() === "true";

export const dateStringToReadable = (dateString: string | Date) =>
  `${new Date(dateString).toLocaleDateString()} ${new Date(
    dateString
  ).toLocaleTimeString()}`;

export const getIdTokenFromHeaders = (req: NextApiRequest) =>
  req.headers?.authorization?.split(" ")[1];
