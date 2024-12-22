import User from "../models/User.js";
import { authTokenCookie } from "../config/authToken.js";
import jwt from "jsonwebtoken"

// -----------------------------------------------------------------------------------------------------------
// Note: `uudi` (uniqueUserDocumentId) will be provided by the DigiLocker API after user has authenticated using it.
// -----------------------------------------------------------------------------------------------------------
const generateTokenAndSetCookie = (res, user) => {
    const token = jwt.sign({
        userId: user._id, 
    }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    })
    return token;
}

async function signup(req, res) {
    const { name, walletAddress, uudi } = req.body;
    try {
        if (!name || !walletAddress || !uudi) {
            return res.status(400).json({message:"All fields are required"})
        }
        const userExists = await User.findOne({ uudi });
        if (userExists) {
            return res.status(400).json({message:"User with this wallet address already exists"})
        }

        const user = await User.create({
            name,
            uudi,
            walletAddress,
        })

        await user.save();
        // create jwt
        generateTokenAndSetCookie(res, user);

        res.status(200).json({
            user,
            token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Error occurred"})
    }
}

async function login(req, res) {
    const { uudi, walletAddress } = req.body;
    try {
        if (!walletAddress) {
            return res.status(400).json({message: "All fields are required" })
        }

        const user = await User.findOne({ uudi });
        if (!user) {
            return res.status(404).json({message: "User not found"})
        }

        if (user.walletAddress != walletAddress) {
            res.status(400).json({ message: "Invalid Credentials" });
        }
        
        user.lastLogin = new Date();
        await user.save();
        
        const token = generateTokenAndSetCookie(res, user);
        res.status(200).json({
            error: false,
            message:"Logged in successfully",
            user: user,
            token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Error occurred"})
    }
}

async function logout(req, res) {
    if (!req.userId) {
        return res.status(400).json({message:"User not logged in"})
    }
    res.clearCookie(authTokenCookie.name);
    res.status(200).json({message:"Logged out successfully"})
}

async function checkAuth(req, res) {
    try {
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(400).json({message:"User not found"})
        }
        res.status(200).json({
            user
        })
    } catch (error) {
        console.log("Error in checkAuth", error);
        return res.status(500).json({message:"Error occurred"})
    }
}

export { signup, login, logout, checkAuth };