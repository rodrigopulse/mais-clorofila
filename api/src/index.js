import express from "express";
import routes from "./routes";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

dotenv.config();

const port = process.env.PORT || 8080;

// mongoose
const {
  MONGO_USER,
  MONGO_HOST,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_DATA,
} = process.env;
const url = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATA}?authSource=admin`;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(routes);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
