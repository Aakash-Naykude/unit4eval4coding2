const { Schema, model } = require("mongoose");
const showsSchema = new Schema(
  {
    timing: { type: String, required: true },
    movie: { type: Schema.Types.ObjectId, ref: "movie", required: true },
    total_seats:{type:Number, required:true},
    screen: { type: Schema.Types.ObjectId, ref: "screens", required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("shows", showsSchema);
