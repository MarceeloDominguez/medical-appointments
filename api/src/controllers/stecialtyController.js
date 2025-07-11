import { SpecialtyService } from "../services/specialtyService.js";

export const SpecialtyController = {
  async getSpecialties(req, res) {
    try {
      const specialties = await SpecialtyService.getSpecialties();
      res.status(200).json(specialties);
    } catch (error) {
      console.error("Error fetching specialties:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  async getSpecialtyById(req, res) {
    try {
      const specialtyId = parseInt(req.params.id, 10);

      const specialty = await SpecialtyService.getSpecialtyById(specialtyId);
      res.status(200).json(specialty);
    } catch (error) {
      console.log("Error feching specialtyById", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
