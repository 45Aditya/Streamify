import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if(!token) {
            return res.status(401).json({
                message: "Unauthorized - No token provided"
            });
        }
        
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if(!decodedToken) {
            return res.status(401).json({
                message: "Unauthorized - Invalid token"
            });
        }

        const user = await User.findById(decodedToken.userId).select("-password");
        if(!user) {
            return res.status(401).json({
                message: "Unauthorized : User not found"
            });
        }
        console.log(user);
        
        req.user = user;
        next();

    } catch (error) {
        console.log("Error in protectRoute middleware", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
}