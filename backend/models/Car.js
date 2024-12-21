import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    ownerId: {
        type: "ObjectId",
        ref: "User",
        required: true
    },
    make: { // Manufacturer
        type: "String",
        required: true
    },
    model: {
        type: "String",
        required: true
    },
    price: {
        type: "Number",
        required: true
    },
    year: {
        type: "Number",
        required: true
    },
    engineType: {
        type: "String",
        enum: ["Petrol", "Diesel", "Electric", "Hybrid"],
        required: true
    },
    color: {
        type: "String",
        required: true
    },
    extras: {
        type: [{
            key: {
                type: "String",
                required: true
            },
            value: {
                type: "String",
                required: true
            }
        }],
        default: []
    }
    
}, { timestamps: true });

const Car = mongoose.model("Car", carSchema);
export default Car;