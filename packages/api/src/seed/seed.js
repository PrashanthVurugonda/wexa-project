import "dotenv/config";
import { connectMongo } from "../db/mongo.js";
import Article from "../models/Article.js";

const uri = process.env.MONGO_URI || "mongodb://localhost:27017/helpdesk";

await connectMongo(uri);
await Article.deleteMany({});
await Article.insertMany([
  { title: "Billing: Update Payment Method", body: "Go to Billing → Payment Methods → Add Card.", tags: ["billing"] },
  { title: "Tech: Fix 500 Error", body: "Clear cache, check logs, roll back last change.", tags: ["tech"] },
  { title: "Shipping: Track Package", body: "Use the tracking page with your order ID.", tags: ["shipping"] }
]);
console.log("[seed] Inserted demo KB");
process.exit(0);
