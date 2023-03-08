import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};

export async function dbConnect() {
  const db = await connect(process.env.MONGODB_URI!).then(() => {
    conn.isConnected = true;
  });
}

connection.on("connected", () => console.log("Mongodb connected to db"));

connection.on("error", (err) => console.error("Mongodb Errro:", err.message));
