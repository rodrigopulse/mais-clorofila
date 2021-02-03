import { Schema, model } from "mongoose";
import Group from "./GroupSchema";

const FertilizerSchema = new Schema(
  {
    date: { type: Date, required: true },
    name: { type: String },
    groupId: { type: Schema.Types.ObjectId, ref: Group },
  },
  {
    collection: "fertilizers",
    versionKey: false,
    timestamps: true,
  }
);

export default model("Fertilizer", FertilizerSchema);
