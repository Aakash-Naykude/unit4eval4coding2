const { Schema, model } = require("mongoose");
const seatsSchema = new Schema(
  {
    show: { type: Schema.Types.ObjectId, ref: "shows", required: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("seats", seatsSchema);
