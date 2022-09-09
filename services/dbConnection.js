import mongoose from "mongoose";
const connection = {};

const url =
  "mongodb+srv://root:root@cluster0.hrisn9b.mongodb.net/?retryWrites=true&w=majority";

async function dbConnection() {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(url, {
    useNewUrlParser: true,
  });

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnection;
