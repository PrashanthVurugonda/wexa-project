import { Router } from "express";
const r = Router();
r.get("/", (_req, res) => res.json({ ok: true, service: "api", at: "/" }));
r.get("/healthz", (_req, res) => res.json({ ok: true, service: "api" }));
export default r;
