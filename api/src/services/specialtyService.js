import { SpecialtyModel } from "../model/specialtyModel.js";

export const SpecialtyService = {
  async getSpecialties() {
    return await SpecialtyModel.getSpecialties();
  },

  async getSpecialtyById(id) {
    const specialty = await SpecialtyModel.getSpecialtyById(id);
    return specialty;
  },
};
