import Swal from "sweetalert2";

export default async function deleteAllBookInCamp(
  token: string,
  Campid: string,
  bookDate: string
) {
  const response = await fetch(
    "https://presentation-day-1-spicylatte.vercel.app" +
      `/api/v1/campground/${Campid}/bookings/`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        bookDate: bookDate,
      }),
    }
  );
  const res = await response.json();
  if (!response.ok) {
    Swal.fire({
      title: "Error!",
      text: "Something Wrong",
      icon: "error",
    });
  } else {
    Swal.fire({
      title: "Success!",
      text: `All Booking in ${Campid} on ${bookDate} has been Deleted for ${res.counts}`,
      icon: "success",
    });
  }
  return res;
}
