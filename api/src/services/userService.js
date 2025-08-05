import { UserModel } from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

  async loginUser({ email, password }) {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const user = await UserModel.findByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "48h" }
    );

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    };
  },
};
