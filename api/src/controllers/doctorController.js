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

  async getDoctorById(req, res) {
    try {
      const doctorId = req.params.id;

      const doctor = await DoctorService.getDoctorById(doctorId);
      if (!doctor) {
        return res.status(404).json({ message: "Doctor not found" });
      }

      res.status(200).json(doctor);
    } catch (error) {
      console.error("Error fetching doctor by ID:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  async createDoctor(req, res) {
    try {
      const { userId, specialtyId, bio, hospital, location, workingHours } =
        req.body;

      if (!userId || !specialtyId || !bio || !hospital || !location) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const newDoctor = await DoctorService.createDoctor({
        userId,
        specialtyId,
        bio,
        hospital,
        location,
        workingHours,
      });

      res.status(201).json(newDoctor);
    } catch (error) {
      console.error("Error creating doctor:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  async updateDoctor(req, res) {
    try {
      const doctorId = req.params.id;
      const doctorData = req.body;

      const updatedDoctor = await DoctorService.updateDoctor(
        doctorId,
        doctorData
      );

      if (!updatedDoctor) {
        return res.status(404).json({ message: "Doctor not found" });
      }
      res.status(200).json(updatedDoctor);
    } catch (error) {
      console.error("Error updating doctor:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
