import { UserModel } from "../model/userModel.js";

export const UserService = {
  async getAllUsers() {
    return await UserModel.getAllUsers();
  },
};
