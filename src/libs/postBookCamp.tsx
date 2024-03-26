export default async function postBookCamp(
  token: string,
  Date: string,
  id: string
) {
  const response = await fetch(
    "https://presentation-day-1-spicylatte.vercel.app" +
      `/api/v1/campground/${id}/bookings/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        bookDate: Date,
      }),
    }
  );
/*   console.log(process.env.BACKEND_URL); */
  if (!response.ok) {
/*     console.log(token);
    console.log(Date);
    console.log(id); */

    throw new Error("Failed to book");
  } else {
    alert("Let's goooo");
  }
  return await response.json();
}
