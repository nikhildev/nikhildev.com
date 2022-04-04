import { ObjectId } from "mongodb";

// Interface to defining our object of response functions
export interface ResponseFuncs {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
}

// Interface to define our Todo model on the frontend
export type PostT = {
  _id: ObjectId;
  title: String;
  body: String;
  author: String;
  createdAt: Date;
};

// Interface to define our Todo model on the frontend
export type UserT = {
  _id: ObjectId;
  google_user_id: String;
  displayName: String;
  email: String;
  createdAt: Date;
  modifiedAt: Date;
};
