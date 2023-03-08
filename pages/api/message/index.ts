Message;
import Message from "@/models/Message";
import { dbConnect } from "@/utils/mongoose";

dbConnect();

export default async (req: any, res: any) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const tasks = await Message.find();
        return res.status(200).json(tasks);
      } catch (error: any) {
        return res.status(400).json({ msg: error.message });
      }
    case "POST":
      try {
        const newTask = new Message(body);
        const savedTask = await newTask.save();
        return res.status(201).json(savedTask);
      } catch (error: any) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
};
