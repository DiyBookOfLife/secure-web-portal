import express from "express";
import Bookmark from "../models/Bookmark.js";
import { authMiddleware } from "../utils/auth.js";

const router = express.Router();

// CREATE BOOKMARK
router.post("/", authMiddleware, async (req, res) => {
  const bookmark = await Bookmark.create({
    ...req.body,
    user: req.user.id, // ties bookmark to user
  });

  res.json(bookmark);
});

// READ ALL BOOKMARKS
router.get("/", authMiddleware, async (req, res) => {
  const bookmarks = await Bookmark.find({
    user: req.user.id,
  });
  res.json(bookmarks);
});

// READ BOOKMARK BY ID
router.get("/:id", authMiddleware, async (req, res) => {
  const bookmark = await Bookmark.find({
    _id: req.params.id,
    user: req.user.id,
  });
});

// UPDATE BOOKMARK BY ID
router.get("/:id", authMiddleware, async (req, res) => {
  const updated = await Bookmark.findByIdAndUpdate(
    {
      _id: req.params.id,
      user: req.user.id,
    },
    req.body,
    { new: true },
  );
  if (!updated) {
    return res.status(404).json({ message: "Bookmark not found." });
  }
  res.json(updated);
});

// DELETE BOOKMARK BY ID
router.delete("/:id", authMiddleware, async (req, res) => {
  const deleted = await Bookmark.findByIdAndDelete({
    id_: req.params.id,
    user: req.user.id,
  });
  if (!deleted) {
    return (res.status(404), json({ message: "Bookmark not found." }));
  }
  res.json({ message: "Bookmark Deleted!" });
});

export default router;
