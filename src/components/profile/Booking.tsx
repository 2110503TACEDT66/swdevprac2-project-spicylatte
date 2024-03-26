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
export default function Bookings({ booking }: { booking: Booking }) {
  const { data: session } = useSession();
  const bookCreatedAt = new Date(booking.createdAt);
  const checkIn = new Date(booking.bookDate);
  const [editDate, setEditDate] = React.useState<string>("");
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const handleEditDate = async () => {
    console.log(session?.user.token, editDate.toString(), booking._id)
    const put = await putBookCamp(
      session?.user.token as string,
      editDate.toString(),
      booking._id
    );
  };
  return (
    <div className="bg-gray-200 container rounded-2xl items-center mx-auto max-w-4xl">
      <div className="flex-row flex mb-10 items-center p-10 gap-10">
        <Image
          src="/river.jpeg"
          alt="Your Booking"
          width={3}
          height={3}
          sizes="50vw"
          className="rounded-lg w-[25%] h-[25%] bg-black items-center"
        />
        <div className="text-md text-gray-700">
          <h2 className="font-medium text-3xl">{booking.campground?.name}</h2>
          <p>
            <span className="text-blue-500">Booking created at:</span>{" "}
            {bookCreatedAt.toDateString()}
          </p>
          <div
            className={
              `flex   mt-2 ` +
              (isEditing ? "flex-col items-start gap-5" : "items-center gap-10")
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
    </div>
  );
}