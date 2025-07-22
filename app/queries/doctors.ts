import { getDoctorsBySpecialtyId } from "@/services/doctorService";
import { useQuery } from "@tanstack/react-query";

export const useGetDoctorsBySpecialty = (specialtyId: number) => {
  return useQuery({
    queryKey: ["doctors", specialtyId],
    queryFn: () => getDoctorsBySpecialtyId(specialtyId),
    enabled: !!specialtyId,
  });
};
