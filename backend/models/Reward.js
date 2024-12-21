import mongoose from "mongoose";

const rewardSchema = new mongoose.Schema({
    userId: {
        type: "ObjectId",
        ref: "User",
        required: true
    },
    points: {
        type: "Number",
        required: true
    }
}, { timestamps: true });

const Reward = mongoose.model("Reward", rewardSchema);
export default Reward;