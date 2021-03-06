import { Schema, model } from "mongoose";
import User from "./UserSchema";

const GroupSchema = new Schema(
  {
    name: { type: String, required: true },
    icon: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: User },
    description: { type: String },
    dateLastWatering: { type: Date },
    dateLastFertilization: { type: Date },
    nameLastFertinization: { type: String },
    dateNextFertilization: { type: Date },
  },
  {
    collection: "groups",
    versionKey: false,
    timestamps: true,
  }
);

export default model("Group", GroupSchema);
