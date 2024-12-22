import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
    ownerId: {
        type: "ObjectId",
        ref: "User",
        required: true
    },
    images: {
        type: ["String"],
        default: []
    },
    address: {
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
    bedrooms: {
        type: "Number",
        required: true
    },
    bathrooms: {
        type: "Number",
        required: true
    },
    areaSqft: {
        type: "Number",
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

const Property = mongoose.model("Property", propertySchema);
export default Property;