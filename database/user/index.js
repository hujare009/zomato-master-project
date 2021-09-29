import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: {type: String, required: true },
    email: {type:String, required: true},
    password: {type: string},
    address: [{ detail: { type: String }, for: {type: string } }],
    phoneNumber: [{type: Number}],
},
{
    timestamps: true,
}
);

export const UserModel = mongoose.model("Users", UserSchema);
