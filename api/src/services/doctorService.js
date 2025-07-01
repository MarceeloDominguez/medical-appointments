import { DoctorModel } from "../model/doctorModel.js";

export const DoctorService = {
  async getAllDoctors() {
    return await DoctorModel.getAllDoctors();
  },
};
