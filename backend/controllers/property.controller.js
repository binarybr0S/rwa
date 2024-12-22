import Property from "../models/Property.js";

const getMyProperties = async (req, res) => {
    try {
        const rewards = await Prope.find({ userId:req.userId });
        res.status(200).json({
            rewards
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server error occurred" });
    }
}
    
export { getMyRewards };