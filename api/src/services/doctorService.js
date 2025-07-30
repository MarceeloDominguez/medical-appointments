import { DoctorModel } from "../model/doctorModel.js";

export const DoctorService = {
  async getAllDoctors() {
    return await DoctorModel.getAllDoctors();
  },

  async getDoctorsBySpecialty(specialtyId) {
    return await DoctorModel.getDoctorsBySpecialty(specialtyId);
  },

  async getDoctorById(doctorId) {
    return await DoctorModel.getDoctorById(doctorId);
  },
};
