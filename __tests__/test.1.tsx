import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Page from "@/app/profile/page";
import { redirect } from "next/navigation";

jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

jest.mock("@/libs/getAllBookings", () => ({
  __esModule: true,
  default: async () => ({ data: [] }),
}));

describe("Redirects to /booking if no bookings", async () => {
  render(<Page />);

  await waitFor(() => {
    expect(
      screen.getByText("You don't have any booking yet.")
    ).toBeInTheDocument();
  });

  const bookHereLink = screen.getByRole("link", { name: /Book here/i });
  userEvent.click(bookHereLink);

  expect(redirect).toHaveBeenCalledWith("/booking"); 
});
