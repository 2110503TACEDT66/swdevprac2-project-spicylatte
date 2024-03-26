import Swal from "sweetalert2";

export default async function deleteBookById(id: string, token: string) {
  const response = await fetch(
    "https://presentation-day-1-spicylatte.vercel.app" +
      `/api/v1/bookings/${id}`,
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
      text: "Delete successfully",
      icon: "success",
    });
  }
}
