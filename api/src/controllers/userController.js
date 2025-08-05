import { UserService } from "../services/userService.js";

export const UserController = {
  async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  async registerUser(req, res) {
    try {
      const newUser = await UserService.registerUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error registering user", error: error.message });
      console.log(error);
    }
  },

  async loginUser(req, res) {
    try {
      const data = await UserService.loginUser(req.body);
      res.status(200).json(data);
    } catch (error) {
      res
        .status(401)
        .json({ message: "Authentication failed", error: error.message });
      console.log(error);
    }
  },
};
