export async function getSpecialties() {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}/specialties`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch specialties");
  }

  const data = await response.json();
  return data;
}

export async function getSpecialtyById(id: number) {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}/specialties/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch specialty");
  }

  const data = await response.json();

  return data;
}
