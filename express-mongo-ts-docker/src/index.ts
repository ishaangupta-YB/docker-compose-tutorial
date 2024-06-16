import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ msg: "app working" });
});

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
