import express from "express";
import { config } from "dotenv";

config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).send({message: "SERVER OK!"});
}) 

app.listen(port, () => {
    console.log(`⚡ Server started on http://localhost:${port}`);
})