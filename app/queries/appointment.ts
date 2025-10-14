import { createAppointment } from "@/services/AppointmentService";
import { Appointment } from "@/type/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (appointmentData: Appointment) =>
      createAppointment(appointmentData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
    },
    onError: (error) => {
      console.error("Error creating appointment:", error);
    },
  });
};
