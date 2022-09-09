import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  date: { type: Date },
  image: {
    type: String,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
});

const Event = mongoose.models.Events || mongoose.model("Events", EventSchema);

export default Event;
