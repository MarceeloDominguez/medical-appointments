import { DoctorService } from "../services/doctorService.js";

export const DoctorController = {
  async getAllDoctors(req, res) {
    try {
      const doctors = await DoctorService.getAllDoctors();
      res.status(200).json(doctors);
    } catch (error) {
      console.error("Error fetching doctors:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
