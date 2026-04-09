const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();




const app = express();

app.use(cors());
app.use(express.json());

// serve images as URLs
app.use("/uploads", express.static("uploads"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const bookRoutes = require("./routes/bookRoutes");
app.use("/books", bookRoutes);
