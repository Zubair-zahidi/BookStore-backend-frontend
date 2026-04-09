const express = require("express");
const upload = require("../multer");
const Book = require("../models/Book");

const router = express.Router();

// ADD BOOK (with image)
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, author, price } = req.body;

    const book = new Book({
      title,
      author,
      price,
      image: `http://localhost:5000/uploads/${req.file.filename}`,
    });

    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL BOOKS
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

module.exports = router;
