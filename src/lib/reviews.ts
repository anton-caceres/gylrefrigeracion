import fs from "fs";
import path from "path";

export type Review = {
  id: string;
  name: string;
  rating: number; // 1..5
  comment: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string; // ISO
};

const DATA_DIR = path.join(process.cwd(), ".data");
const FILE = path.join(DATA_DIR, "reviews.json");

let inMemory: Review[] | null = null;
let inMemoryMode = false;

function ensureFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    if (!fs.existsSync(FILE)) {
      // seed
      const seed = JSON.parse(fs.readFileSync(path.join(process.cwd(), "src/lib/reviews.seed.json"), "utf8"));
      fs.writeFileSync(FILE, JSON.stringify(seed, null, 2), "utf8");
    }
  } catch (e) {
    inMemoryMode = true;
    if (!inMemory) {
      const seed = require("./reviews.seed.json") as Review[];
      inMemory = seed;
    }
  }
}

function readAll(): Review[] {
  ensureFile();
  if (inMemoryMode) {
    return inMemory || [];
  }
  const raw = fs.readFileSync(FILE, "utf8");
  return JSON.parse(raw || "[]") as Review[];
}

function writeAll(items: Review[]) {
  if (inMemoryMode) {
    inMemory = items;
    return;
  }
  fs.writeFileSync(FILE, JSON.stringify(items, null, 2), "utf8");
}

export function isInMemoryMode() {
  ensureFile();
  return inMemoryMode;
}

export function getReviewsByStatus(status: "approved" | "pending" | "rejected") {
  const all = readAll();
  return all.filter(r => r.status === status);
}

export function addReview(data: Omit<Review, "id" | "status" | "createdAt">) {
  const all = readAll();
  const r: Review = {
    ...data,
    id: crypto.randomUUID(),
    status: "pending",
    createdAt: new Date().toISOString()
  };
  all.unshift(r);
  writeAll(all);
  return r;
}

export function updateStatus(id: string, status: "approved" | "rejected") {
  const all = readAll();
  const idx = all.findIndex(r => r.id === id);
  if (idx === -1) return null;
  all[idx].status = status;
  writeAll(all);
  return all[idx];
}
