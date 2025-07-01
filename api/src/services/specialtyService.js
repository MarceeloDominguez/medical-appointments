import { SpecialtyModel } from "../model/specialtyModel.js";

export const SpecialtyService = {
  async getSpecialties() {
    return await SpecialtyModel.getSpecialties();
  },
};
