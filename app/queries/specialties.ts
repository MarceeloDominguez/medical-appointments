import { getSpecialties } from "@/services/specialtiesService";
import { useQuery } from "@tanstack/react-query";

export const useGetSpecialties = () => {
  return useQuery({
    queryKey: ["specialties"],
    queryFn: () => getSpecialties(),
  });
};
