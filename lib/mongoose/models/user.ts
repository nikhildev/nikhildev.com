import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    uid: String,
    displayName: String,
    email: String,
    photoURL: String,
  },
  { timestamps: true }
);

export interface UserDocument extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  uid: String;
  displayName: String;
  email: String;
  photoURL: String;
  createdAt: Date;
  modifiedAt: Date;
}

const User =
  mongoose.models.User || mongoose.model<UserDocument>("User", userSchema);

export default User;
