import Reward from "../models/Reward.js";

const getMyRewards = async (req, res) => {
    try {
        const rewards = await Reward.find({ userId:req.userId });
        res.status(200).json({
            rewards
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server error occurred" });
    }
}

export { getMyRewards };