const mongoose = require("mongoose");
require('dotenv').config()

mongoose.set("strictQuery", false);

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.3zfmk5z.mongodb.net/?retryWrites=false&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
};

module.exports = connectToDatabase;
