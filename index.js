import express from "express";
import bodyParser from "body-parser";
import { createReview, getAll } from "./api-call";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/list", async (req, res) => {
  const response = await getAll();
  console.log("res", response)

  res.send({
    "reviews": await response.json(),
  });
});

app.get("/create", async (req, res) => {
  const response = await createReview();
  console.log("res", response)

  res.send({
    "reviews": await response.text(),
  });
});

app.listen(port || 9000, () => {
  console.log(`Server is running at ${port} port.`);
});
