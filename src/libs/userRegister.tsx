export default async function userSignUp(
  name: string,
  email: string,
  password: string,
  tel: string
) {
  const response = await fetch(
    "https://presentation-day-1-spicylatte.vercel.app" +
      "/api/v1/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        tel,
        role: "user",
      }),
    }
  );
  if (!response.ok) throw new Error("Failed to sign Up");
  return await response.json();
}
