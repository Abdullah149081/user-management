/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUser = async (userData: IUser) => {
    const { password, ...result } = (
        await UserModel.create(userData)
    ).toObject();

    return result;
};

const getAllUser = async () => {
    const result = await UserModel.find().select({
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
