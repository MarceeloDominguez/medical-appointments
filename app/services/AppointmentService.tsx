export async function createAppointment(appointmentData: {
  doctorId: string;
  patientId: string;
  date: string;
}) {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}/appointments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to create appointment");
  }
  const data = await response.json();
  return data;
}
