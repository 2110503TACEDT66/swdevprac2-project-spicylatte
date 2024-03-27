import Swal from "sweetalert2";
export default async function postBookCamp(
  token: string,
  Date: string,
  id: string
  /* name : string, */
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
  const res = await response.json();
  if (!response.ok) {
    Swal.fire({
      title: "Error!",
      text: "You has already made 3 booking or date didn't select yet",
      icon: "error",
    });
  } else {
    Swal.fire({
      title: "Success!",
      text: "Booking has been made",
      icon: "success",
    });
  }
  return res;
}
