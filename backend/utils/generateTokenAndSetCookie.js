import jwt from "jsonwebtoken"
import { authTokenCookie } from "../config/authToken.js"

export const generateTokenAndSetCookie = (res, user, result) => {
    const token = jwt.sign({
        userId: user._id, 
    }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    })
    
    res.cookie(authTokenCookie.name, token, {
        maxAge: authTokenCookie.maxAge,
        httpOnly: false,
        secure: true,
        sameSite: "None",
    })
    result.token = token;
}