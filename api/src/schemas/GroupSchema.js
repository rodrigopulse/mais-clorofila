import { Schema, model } from "mongoose";
import User from "./UserSchema";

const GroupSchema = new Schema(
  {
    name: { type: String, required: true },
    icon: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: User },
    description: { type: String },
    lastWatering: { type: Date },
    lastfertilizing: { type: Date },
    nextFertilizing: { type: Date },
    watering: { type: Array },
    fertilizing: { type: Array },
  },
  {
    collection: "groups",
    versionKey: false,
    timestamps: true,
  }
);

export default model("Group", GroupSchema);
