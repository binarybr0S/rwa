import User from "../models/User.js"

async function getMyUserProfile(req, res) {
    try {
        const user = await User.findById(req.userId);
        if (!user){
            return res.status(404).json({message: "User with the provided id does not exist"});
        }
        res.status(200).json({
            user: {
                ...user._doc,
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error occurred"})
    }
}

async function getUserProfileById(req, res) {

    // CURRENTLY BLOCK OTHER USERS FROM ACCESSING OTHER USERS PROFILE
    if (req.userId !== req.params.id) {
        return res.status(403).json({ message: "Forbidden Action - Accessing other profiles is not permitted" });
    }else{
        return getMyUserProfile(req, res);
    }

    // try {
    //     const user = await User.findById(req.params.id);
    //     if (!user){
    //         return res.status(404).json({message: "User with the provided id does not exist"});
    //     }
    //     res.status(200).json({
    //         user: {
    //             _id: user._id,
    //             name: user.name,
    //             email: user.email,
    //             bio: user.bio,
    //             profilePicture: user.profilePicture,
    //         }
    //     });
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({message: "Error occurred"})
    // }
}

async function updateUser(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.userId, req.body);
        if (!user){
            return res.status(404).json({ message: "User with the provided id does not exist" });
        }
        res.status(200).json({
            user: {
                ...user._doc,
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error occurred" })
    }
}

export { getMyUserProfile, updateUser, getUserProfileById };