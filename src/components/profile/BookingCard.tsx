"use client";
import { Booking } from "@/type";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoPencil } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import putBookCamp from "@/libs/putBookCamp";
import DatepickBtn from "@/components/DatepickBtn";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import deleteBookById from "@/libs/deleteBookById";
import { useRouter } from "next/navigation";
/* import HardCodeForJustImg from "./HardCodeForJustImg"; */
import { FaLocationDot } from "react-icons/fa6";
import getDate from "@/libs/getDate";
export default function Bookings({
  booking,
  isAdmin,
}: {
  booking: Booking;
  isAdmin: boolean;
}) {
  const router = useRouter();
  const { data: session } = useSession();
  const bookCreatedAt = new Date(booking.createdAt);
  const checkIn = new Date(booking.bookDate);
  const [editDate, setEditDate] = React.useState<Date>();
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const handleEditDate = async () => {
    if(!editDate) return;
    const put = await putBookCamp(
      session?.user.token as string,
      getDate(editDate),
      booking._id
    );
    router.refresh();
  };
  const handleDelete = async () => {
    Swal.fire({
      title: "<p>Do you want to delete booking?</p>",
      icon: "warning",
      text: `Booking : ${booking.campground?.name} ${
        isAdmin && `From user ${booking.user}`
      }`,
      showDenyButton: true,
      confirmButtonColor: "#4b5563",
      denyButtonColor: "#aaa",
      confirmButtonText: "Yes, Delete my booking",
      denyButtonText: "Cancel",
      customClass: {
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteBookById(session?.user.token as string, booking._id);
        Swal.fire("Booking Deleted!", "", "success");
        router.refresh();
      }
    });
  };
  return (
    <div className="bg-gray-200 container rounded-2xl items-center  max-w-4xl mx-auto shadow-xl">
      <div className="relative mb-10">
        {isAdmin && (
          <span className="text-gray-500 top-5 right-5 absolute text-sm">
            Booking id: {booking._id}
          </span>
        )}

        <div className="flex-row flex items-center p-10 gap-10 pb-0">
          {/* <HardCodeForJustImg
            name={booking.campground.name}
          ></HardCodeForJustImg> */}
          <div className="text-md text-gray-700">
            <h2 className="font-medium text-3xl">{booking.campground?.name}</h2>
            {/* Address */}
            <FaLocationDot className="inline mr-2" />
            <span>{booking.campground?.address}</span>
            <p>
              <span className="text-blue-500">Booking created at:</span>{" "}
              {bookCreatedAt.toDateString()}
            </p>
            <div
              className={
                `flex   mt-2 ` +
                (isEditing
                  ? "flex-col items-start gap-5"
                  : "items-center gap-10")
              }
            >
              <div className="">
                <div className="text-lg"> Date Booked</div>
                <div className=" bg-white rounded-full  max-w-max p-2 px-4 flex flex-col items-center gap-2 ">
                  <div className="flex gap-2 items-center">
                    <FaCalendarAlt className="inline text-red-400" />
                    <span>{checkIn.toDateString()}</span>
                    {!isEditing && (
                      <IoPencil
                        className="cursor-pointer"
                        onClick={() => setIsEditing(true)}
                      />
                    )}

                    {isEditing && (
                      <>
                        <DatepickBtn
                          Fn={(e: any) => {
                            setEditDate(e);
                          }}
                        />
                        <div className="w-10 h-10 rounded-full bg-gray-800 grid place-items-center">
                          <FaCheck
                            fill="white"
                            onClick={() => handleEditDate()}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="">
                <div className=" text-lg"> Telephone Number</div>
                <Link href={`tel:${booking.campground.tel}`}>
                  <div className=" bg-white rounded-full max-w-max p-2 px-4 flex items-center gap-2 ">
                    <FaPhone className="inline fill-green-400 " />
                    <span>{booking.campground.tel}</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end pr-10 pb-5 mt-5 w-full">
          <button
            className="bg-red-500 text-white font-bold px-4 py-2 rounded-full"
            onClick={handleDelete}
          >
            {!isAdmin ? "Cancel this booking " : "Force Cancel this booking"}
          </button>
        </div>
      </div>
    </div>
  );
}
