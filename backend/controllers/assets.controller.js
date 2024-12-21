import Car from "../models/Car.js";

const queryAssets = async (req, res) => {
    const query = req.query.q;
    try {
        const cars = await Car.find({
            $or: [
                { make: { $regex: query, $options: 'i' } },
                { model: { $regex: query, $options: 'i' } },
                { color: { $regex: query, $options: 'i' } },
                { engineType: { $regex: query, $options: 'i' } }
            ]
        });
        res.status(200).json({
            results: cars
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server error occurred" });
    }
}

const getMyAssets = async (req, res) => {
    const ownerId = req.userId;
    try {
        const cars = await Car.find({ ownerId });
        res.status(200).json({
            results: cars
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server error occurred" });
    }
}

export { queryAssets, getMyAssets };