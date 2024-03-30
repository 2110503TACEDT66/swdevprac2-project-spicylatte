"use client";
import deleteAllBookInCamp from "@/libs/deleteAllBookInCamp";
import getAllCamp from "@/libs/getAllCamp";
import { Campgrounds } from "@/type";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function adminRemoveAllBooking({
  allCampgroundAvaliable,
}: {
  allCampgroundAvaliable: string[];
}) {
  const router = useRouter();
  const MySwal = withReactContent(Swal);
  const { data: session } = useSession();
  function arrayToObj(arr: string[]): { [key: string]: string } {
    const obj: { [key: string]: string } = {};
    arr.forEach((item) => {
      obj[item] = item;
    });
    return obj;
  }
  function getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear().toString().padStart(4, "0");
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  function convertToUTCDateString(dateString: string): string | null {
    // Parse the string to extract year, month, and day
    const match = dateString.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) {
      console.error("Invalid date format. Expected format is 'YYYY-MM-DD'.");
      return null;
    }

    // Extract components from the matched groups
    const [, year, month, day] = match.map(Number);
    // Create a new Date object in UTC using the extracted components
    const utcDate = new Date(Date.UTC(year, month - 1, day));
    return utcDate.toISOString().split("T")[0];
  }

  const avaliableCampground = arrayToObj(allCampgroundAvaliable);

  const removeAllBookingHandler = async () => {
    const { value: campground } = await MySwal.fire({
      title: "Enter Campground ID",
      input: "select",
      inputOptions: {
        avaliableCampground,
      },
      inputPlaceholder: "Select a campground",
      confirmButtonText: "Next",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "You need to select campground!";
        }
      },
    });
    if (!campground) return;
    const { value: date } = await MySwal.fire({
      title: "Type a Date",
      input: "text",
      inputValue: getTodayDate(),
      inputPlaceholder: getTodayDate(),
      confirmButtonText: "Delete all booking for this day",
      confirmButtonColor: "#F27474",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "Please provide a date.";
        } else {
          const datePattern = /^\d{4}-\d{2}-\d{2}$/;
          const isDateValid = datePattern.test(value);
          if (!isDateValid) {
            return "Please provide the date in YYYY-MM-DD format.";
          }
        }
      },
    });
    if (!date || !campground) {
      return;
    }
    // console.log(campground);
    // console.log(date);
    // console.log("UTC", new Date(date).toISOString());
    // console.log(session!.user.token);
    const del = await deleteAllBookInCamp(
      session!.user.token,
      campground,
      date
    );
    if (del.counts > 0) {
      router.refresh();
    }
    // console.log(del);
  };
  return (
    <button
      className="bg-red-500 text-white font-bold px-4 py-2 rounded-full"
      onClick={removeAllBookingHandler}
    >
      Remove All Booking for specified day
    </button>
  );
}
