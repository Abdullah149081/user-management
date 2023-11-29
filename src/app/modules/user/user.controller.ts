/* eslint-disable @typescript-eslint/no-explicit-any */
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
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "something went wrong",
            err: error,
        });
    }
};

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const result = await userService.getAllUser();

        res.status(200).json({
            success: true,
            message: "User fetched successfully!",
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            messages: "user not found!",
            error: {
                code: 404,
                description: "user not found",
            },
        });
    }
};
const getSingleUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;

        const result = await userService.getSingleUser(parseFloat(userId));

        res.status(200).json({
            success: true,
            message: "User fetched successfully!",
            data: result,
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            messages: "user not found!",
            error: {
                code: 404,
                description: "user not found",
            },
        });
    }
};

export const userController = {
    createUser,
    getAllUsers,
    getSingleUser,
};
