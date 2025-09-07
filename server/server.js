import express from "express";
import cors from "cors";
import 'dotenv/config'
import handleRoutes from "./config/routes/handleRoutes.js";

const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(cors());

app.get("/v1", (req, res) =>{
    res.send("Servidor corriendo");
})
app.use("/v1", handleRoutes);


app.listen(PORT, console.log(`¡Servidor corriendo en el puerto! ${PORT}`));

export default app;