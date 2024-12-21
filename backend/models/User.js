import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    uudi: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    walletAddress: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    lastLogin: {
        type: Date,
        default: Date.now,
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

export default User;