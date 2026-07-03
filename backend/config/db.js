import mongoose from "mongoose";
export const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    throw new Error("Mongo uri is not defined in  env");
  }

  mongoose.set("strictQuery", true);

  const conn = await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 10000,
  });

  console.log(
    `✅ MongoDB connected : ${conn.connection.host}/${conn.connection.name}`,
  );

  return conn;
};
