const PORT = 8000;
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json("hi");
});

app.get("/summary", (req, res) => {
  const articleUrl = req.query.url;

  const options = {
    method: "GET",
    url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
    params: {
      url: articleUrl,
      length: "3",
      lang: "pt",
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_ARTICLE_KEY,
      "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(8000, () => console.log(`server is running on port ${PORT}`));
