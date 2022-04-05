import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  uid: String,
  displayName: String,
  email: String,
  photoURL: String,
  createdAt: mongoose.Schema.Types.Date,
  modifiedAt: mongoose.Schema.Types.Date,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
