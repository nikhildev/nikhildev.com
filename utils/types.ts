import { ObjectId } from "mongodb";

// Interface to defining our object of response functions
export interface ResponseFuncs {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
}

export type RequestMethods = "GET" | "POST" | "PUT" | "DELETE";

// Interface to define our Todo model on the frontend
export type PostT = {
  _id: ObjectId;
  title: string;
  body: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
};

// Interface to define our Todo model on the frontend
export type UserT = {
  _id: ObjectId;
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  createdAt: Date;
  updatedAt: Date;
};
