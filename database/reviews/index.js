import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema({
    food: { type: mongoose.Types.ObjectId, ref: "Foods" },
    restaurants: { type: mongoose.Types.ObjectId, ref: "Restaunts" },
    user: { type: mongoose.Types.ObjectId, ref: "Users" },
    rating: { type: Number, required: true },
    reviewText: { type: String, required: true },
    photos: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Images",
        },
    ],
},
{
    timestamps: true,
}
);

export const ReviewModel = mongoose.model("Reviews", ReviewSchema );