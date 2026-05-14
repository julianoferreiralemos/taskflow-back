const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const tasks = [
  { id: 1, title: "Estudar CI/CD" },
  { id: 2, title: "Deploy no Render" }
];

app.get("/", (req, res) => {
  res.json({
    message: "API v1.0.1 rodando com sucesso!"
  });
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});