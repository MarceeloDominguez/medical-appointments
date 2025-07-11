import {
  getSpecialties,
  getSpecialtyById,
} from "@/services/specialtiesService";
import { useQuery } from "@tanstack/react-query";

export const useGetSpecialties = () => {
  return useQuery({
    queryKey: ["specialties"],
    queryFn: () => getSpecialties(),
  });
};

export const useSpecialtyById = (id: number) => {
  return useQuery({
    queryKey: ["specialties", id],
    queryFn: () => getSpecialtyById(id),
    enabled: !!id,
  });
};
