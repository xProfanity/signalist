import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

declare global {
  var mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

let cached = global.mongooseCache;

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if (!MONGODB_URI)
    throw new Error("MONGODB_URI environment variable required!");

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false });
  }

  try {
    cached.conn = await cached.promise;

    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    mongoose.connection.on("error", (error) => {
      console.error("MongoDB connection error", error);

      throw error;
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("MongoDB connection disconnected");
      cached.conn = null;
      cached.promise = null;
    });
  } catch (error) {
    cached.conn = null;
    cached.promise = null;
    throw error;
  }

  console.log(`Connected to database in ${process.env.NODE_ENV} mode`);
};
