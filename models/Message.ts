import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const MessageSchema: Schema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.models.Message ||
  mongoose.model<Message>("Message", MessageSchema);
