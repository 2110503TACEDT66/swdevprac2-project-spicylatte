import Swal from "sweetalert2";

export default async function deleteAllBookInCamp(Campid: string, token: string) {
  const response = await fetch(
    "https://presentation-day-1-spicylatte.vercel.app" +
      `/api/v1/campground/${Campid}/bookings/`,
    {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  const res = response.json();
  if (!response.ok) {
    Swal.fire({
      title: "Error!",
      text: "Something Wrong",
      icon: "error",
    });
  } else {
    Swal.fire({
      title: "Success!",
      text: "All Book has been Delete",
      icon: "success",
    });
  }
}