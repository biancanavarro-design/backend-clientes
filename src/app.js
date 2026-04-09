import express from "express";
import { ClienteController } from "./controllers/clienteController.js";

const app = express();
app.use(express.json());

const clienteController = new ClienteController();

// Rotas
app.post("/clientes", clienteController.criar);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});