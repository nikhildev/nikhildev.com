import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  google_user_id: String,
  displayName: String,
  email: String,
  createdAt: mongoose.Schema.Types.Date,
  modifiedAt: mongoose.Schema.Types.Date,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
