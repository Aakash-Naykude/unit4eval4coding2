const { Schema, model } = require("mongoose");
const screensSchema = new Schema(
  {
    name: { type: String, required: true },
    threatre: { type: Schema.Types.ObjectId, ref: "theatres", required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("screens", screensSchema);
