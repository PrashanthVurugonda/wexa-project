import mongoose from "mongoose";
const ArticleSchema = new mongoose.Schema(
  { title: String, body: String, tags: [String] },
  { timestamps: true }
);
ArticleSchema.index({ title: "text", body: "text", tags: "text" });
export default mongoose.models.Article || mongoose.model("Article", ArticleSchema);
