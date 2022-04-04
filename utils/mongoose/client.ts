import mongoose, { Model } from "mongoose";
import Post from "./models/post";
import User from "./models/user";

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { DATABASE_URL } = process.env;

// Mongo connection
export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch((err) => console.log(err));
  console.log("Mongo Connection Established");

  return { conn, Post, User };
};
