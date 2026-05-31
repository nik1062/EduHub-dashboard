import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false, // Don't return password by default
  },
  role: {
    type: String,
    default: "Student",
  },
  avatar: {
    type: String,
    default: "https://api.dicebear.com/7.x/avataaars/svg?seed=Default",
  },
  stats: {
    hoursLearned: { type: Number, default: 0 },
    coursesInProgress: { type: Number, default: 0 },
    completedCourses: { type: Number, default: 0 },
    achievements: { type: Number, default: 0 },
  },
}, { timestamps: true });

const User = models.User || model("User", UserSchema);

export default User;
