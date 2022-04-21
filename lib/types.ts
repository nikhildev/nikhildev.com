import { ObjectId } from "mongodb";

export enum RequestMethods {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
}

// Interface to define our Todo model on the frontend
export type PostT = {
  _id: ObjectId;
  title: string;
  body: string;
  slug: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
};

export type NewPost = Pick<PostT, "title" | "body">;

// Interface to define our Todo model on the frontend
export type UserT = {
  _id: ObjectId;
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  createdAt: Date;
  updatedAt: Date;
  roles: string[];
};

// TODO: Convert this to a map of status code and message
export enum HttpResponses {
  BAD_REQUEST = "Bad Request",
  UNAUTHORIZED = "Unauthorized",
  INTERNAL_SERVER_ERROR = "Internal Server Error",
}
