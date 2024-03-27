import Swal from "sweetalert2";

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
  const res = await response.json();
  if (!response.ok) {
    Swal.fire({
      title: "Error!",
      text: res.message || "There's an error while registering user",
      icon: "error",
    });
    throw new Error(res.message);
  }
  return res;
}
