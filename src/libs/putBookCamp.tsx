import Swal from "sweetalert2";
export default async function postBookCamp(
  token: string,
  Date: string,
  id: string
) {
  const response = await fetch(
    "https://presentation-day-1-spicylatte.vercel.app" +
      `/api/v1/bookings/${id}`,
    {
      method: "PUT",
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
  const res = await response.json();
  if (!response.ok) {
    Swal.fire({
      title: "Error!",
      text: res.message || "Failed to edit booking",
      icon: "error",
    });
  } else {
    Swal.fire({
      title: "Success!",
      text: "Booking edited successfully",
      icon: "success",
    });
  }
  return res;
}
