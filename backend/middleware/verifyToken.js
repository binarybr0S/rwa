import jwt from "jsonwebtoken";

function verifyToken(req, res, next) {
    if (!req.headers.authorization){
        return res.status(401).json({ message: "Unauthorized - No authorization token provided" });
    }
    
    const token = req.headers.authorization;
    
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!decodedToken) {
            console.log("Unauthorized -  Invalid token");
            return res.status(401).json({ message: "Unauthorized -  Invalid token" });
        }
        req.userId = decodedToken.userId;
        next();
    } catch (error) {
        console.log("Error while verifying token", error);
        return res.status(500).json({ message: "Error occurred" });
    }
}

export { verifyToken };
