import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
  title: String,
  url: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model("Bookmark", bookmarkSchema);
