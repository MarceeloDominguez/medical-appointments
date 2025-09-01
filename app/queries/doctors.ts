import {
  getDoctorById,
  getDoctorsBySpecialtyId,
} from "@/services/doctorService";
import { useQuery } from "@tanstack/react-query";

export const useGetDoctorsBySpecialty = (specialtyId: number) => {
  return useQuery({
    queryKey: ["doctors", specialtyId],
    queryFn: () => getDoctorsBySpecialtyId(specialtyId),
    enabled: !!specialtyId,
  });
};

export const useGetDoctorById = (doctorId: string) => {
  return useQuery({
    queryKey: ["doctor", doctorId],
    queryFn: () => getDoctorById(doctorId),
    enabled: !!doctorId,
  });
};
