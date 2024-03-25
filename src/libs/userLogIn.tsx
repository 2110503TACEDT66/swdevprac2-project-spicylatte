export default async function userLogIn(email: string, password: string) {
  const response = await fetch(
    "https://vaccine-app-backend.vercel.app/api/v1/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );
  if (!response.ok) throw new Error("Failed to log in");
  return await response.json();
}
