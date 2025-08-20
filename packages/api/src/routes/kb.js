import { Router } from "express";
import Article from "../models/Article.js";
const r = Router();

// list/search
r.get("/", async (req, res, next) => {
  try {
    const q = req.query.q;
    if (q) {
      const rows = await Article.find(
        { $text: { $search: q } },
        { score: { $meta: "textScore" } }
      ).sort({ score: { $meta: "textScore" } }).limit(50);
      return res.json(rows);
    }
    const rows = await Article.find().sort({ updatedAt: -1 }).limit(50);
    res.json(rows);
  } catch (e) { next(e); }
});

// create
r.post("/", async (req, res, next) => {
  try {
    const { title, body, tags = [] } = req.body || {};
    if (!title || !body) return res.status(400).json({ error: "title and body required" });
    const doc = await Article.create({ title, body, tags });
    res.status(201).json(doc);
  } catch (e) { next(e); }
});

export default r;
