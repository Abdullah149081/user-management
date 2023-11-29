/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (userData: IUser) => {
    if (await User.isUserExists(userData.userId)) {
        throw new Error("User Already Create");
    }

    const { password, ...result } = (await User.create(userData)).toObject();

    return result;
};

const getAllUser = async () => {
    const result = await User.find().select({
        username: 1,
        fullName: 1,
        age: 1,
        email: 1,
        address: 1,
    });
    return result;
};

const getSingleUser = async (userId: number) => {
    const result = await User.findOne({ userId }).select({
        password: 0,
    });
    return result;
};

const updateUser = async (userId: number, userData: IUser) => {
    if (!(await User.isUserExists(userId))) {
        throw new Error("Update operation aborted");
    }

    const result = await User.findOneAndUpdate(
        { userId },
        { $set: userData },
        { new: true },
    ).select({
        password: 0,
    });

    return result;
};

export const userService = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
};
