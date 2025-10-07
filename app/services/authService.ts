export async function registerUser(
  name: string,
  email: string,
  password: string,
  role: string
) {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}/users/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, role }),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
}

export async function loginUser(email: string, password: string) {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}/users/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
}
