const mognoose = require("mongoose");

const pointSchema = new mognoose.Schema({
  timestamp: Number,
  coords: {
    latitude: Number,
    longtitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number,
  },
});

const trackSchema = new mognoose.Schema({
  userId: {
    type: mognoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    default: "",
  },
  locations: [pointSchema],
});

mognoose.model("Track", trackSchema);
