import { Doctor } from "@/type/type";

export async function getDoctorsBySpecialtyId(specialtyId: number) {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}/doctors/specialty/${specialtyId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch doctors by specialty");
  }

  const data = await response.json();
  return data;
}

export async function getDoctorById(doctorId: string): Promise<Doctor> {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}/doctors/${doctorId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch doctor by ID");
  }

  const data = await response.json();
  return data;
}
