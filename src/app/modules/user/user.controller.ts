import { Request, Response } from "express";
import { userService } from "./user.service";
import userValidSchema from "./user.validation";

const createUser = async (req: Request, res: Response) => {
    try {
        const userData = req.body;
        const zodParseData = userValidSchema.parse(userData);

        const result = await userService.createUser(zodParseData);

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
