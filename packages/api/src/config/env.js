import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../../.env") });

const corsEnv = process.env.CORS_ORIGIN || "";
export const CORS_ORIGIN = corsEnv.includes(",")
  ? corsEnv.split(",").map(s => s.trim()).filter(Boolean)
  : (corsEnv || "*");

export const PORT = Number(process.env.PORT) || 8080;
export const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/helpdesk";
