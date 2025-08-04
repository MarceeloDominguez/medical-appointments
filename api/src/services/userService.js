import { UserModel } from "../model/userModel.js";
import bcrypt from "bcrypt";

export const UserService = {
  async getAllUsers() {
    return await UserModel.getAllUsers();
  },

  async registerUser(userData) {
    const { name, email, password, role } = userData;

    if (!name || !email || !password || !role) {
      throw new Error("All fields are required");
    }

    // Check if user already exists
    const existingUser = await UserModel.findByEmail(email);

    if (existingUser) {
      throw new Error("User already exists with this email");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.registerUser({
      name,
      email,
      password: hashedPassword,
      role,
    });

    delete newUser.password; // Remove password from response

    return newUser;
  },
};
