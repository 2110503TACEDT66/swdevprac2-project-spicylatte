export default async function getAllBookings(token: string) {
  const response = await fetch(
    "https://presentation-day-1-spicylatte.vercel.app" + "/api/v1/bookings",
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok)
    throw new Error("Failed get user profile " + response.statusText);
  return await response.json();
}
