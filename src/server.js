import express from "express";
import { config } from "dotenv";
import router from "./router/index.routes.js";

config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`⚡ Server started on http://localhost:${port}`);
})

//receita básica para a montagem do servidor, o app.use encontra as rotas e o .listen lê o que vem da porta