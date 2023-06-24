const mongoose = require("mongoose");
const USER_NAME = process.env.MONGODB_ATLAS_USER_NAME;
const USER_PASSWORD = process.env.MONGODB_ATLAS_USER_PASSWORD;
const CLUSTER_NAME = process.env.CLUSTER_NAME;

async function dbConnection() {
  try {
    mongoose.connect(
      `mongodb+srv://${USER_NAME}:${USER_PASSWORD}@${CLUSTER_NAME}.lmm7arl.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Connected to database 🔊");
  } catch (error) {
    console.error(error);
  }
}

module.exports = dbConnection();
