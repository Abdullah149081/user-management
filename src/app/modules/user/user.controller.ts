import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
    try {
        const userData = req.body;

        const result = await userService.createUser(userData);

        res.status(201).json({
            success: true,
            message: "User created successfully!",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            err: error,
        });
    }
};

export const userController = {
    createUser,
};
