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

  async getDoctorsBySpecialty(req, res) {
    try {
      const specialtyId = parseInt(req.params.specialtyId, 10);

      if (isNaN(specialtyId)) {
        return res.status(400).json({ message: "Invalid specialty ID" });
      }

      const doctors = await DoctorService.getDoctorsBySpecialty(specialtyId);
      res.status(200).json(doctors);
    } catch (error) {
      console.error("Error fetching doctors by specialty:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
