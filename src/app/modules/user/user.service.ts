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

export const userService = {
    createUser,
    getAllUser,
};
