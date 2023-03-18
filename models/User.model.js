const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  { 
    username:{
type:"string",
require:[true,"Username is required"],
unique: true,
    },
    fullName: {
      type: "string",
      required: [true,"Name is required"],
      min: 3,
      max: 50,

    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
 
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;