import "dotenv/config";
import express from "express";
import cors from "cors";
import { clerkExpressMiddleware, clerkExpressRequireAuth } from "@riverside/auth/express";
import { prisma } from "@riverside/db";

const app = express();
const port = process.env.API_PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(clerkExpressMiddleware());

app.get("/health", async (_req, res) => {
  try {
    const dbNow = await prisma.$queryRawUnsafe("SELECT NOW()::text as now");
    return res.json({ ok: true, db: Array.isArray(dbNow) && dbNow[0] ? dbNow[0].now : "connected" });
  } catch (error) {
    return res.status(500).json({ ok: false, error: error.message });
  }
});

app.get("/me", clerkExpressRequireAuth(), (req, res) => {
  res.json({ ok: true, userId: req.auth.userId });
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
