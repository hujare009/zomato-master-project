import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        reef: "Users",
},
    orderedDetails: [
        {
        food: { type: mongoose.Types.ObjectId, ref: "Foods" },
        quantity: { type: Number, required: true }, 
        paymode: { type: "String", required:true },
        status: { type: String, defaullt: "Placed" },
    paymentDetails: {      
            itemTotal: { type:Number, required: true },
            promo: { type: Number, required: true },
            tax: { type: Number, required: true },
       },
    },
  ],
  orderRatings: {
      type: Number,
      required: true,
  },    
},
{
    timestamps: true,
}
);

export const OrderedModel = mongoose.model("Orders", OrderSchema);

