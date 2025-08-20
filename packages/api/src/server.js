import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectMongo } from "./db/mongo.js";
import { PORT, MONGO_URI, CORS_ORIGIN } from "./config/env.js";
import healthRoutes from "./routes/health.js";
import kbRoutes from "./routes/kb.js";

const app = express();

app.use(cors({ origin: CORS_ORIGIN })); // CORS_ORIGIN can be a string or an array
app.use(express.json());
app.use(morgan("dev"));

app.use("/", healthRoutes);
app.use("/api/kb", kbRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

await connectMongo(MONGO_URI);
console.log("[api] Effective PORT from env:", process.env.PORT);
console.log("[api] Allowed origins:", Array.isArray(CORS_ORIGIN) ? CORS_ORIGIN.join(", ") : CORS_ORIGIN);
app.listen(PORT, () => console.log(`[api] http://localhost:${PORT}`));
