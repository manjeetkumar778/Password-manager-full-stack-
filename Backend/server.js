import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import passwordRoutes from "./routes/passwordRoutes.js"
//  import { createClient } from "@supabase/supabase-js";

dotenv.config();

const PORT = process.env.PORT || 8000
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/password", passwordRoutes)

app.listen(PORT || 8000, ()=>{
   console.log(`the server is running on: http://localhost:${PORT}`)
})