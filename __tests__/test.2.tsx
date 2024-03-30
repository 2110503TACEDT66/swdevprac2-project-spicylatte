import { render, screen, waitFor } from "@testing-library/react";
import BookingCatalog from "@/components/booking/CampCatalog";
import { SessionProvider } from "next-auth/react";
const mockResult = {
  success: true,
  data: [
    {
      _id: "6602f61910d40b5a9ab7c314",
      name: "Gail VonRueden's Campground",
      address: "Phuket",
      tel: "902-834-8340",
      __v: 0,
      imgSrc: "/img/river.jpeg",
      bookings: [],
      id: "6602f61910d40b5a9ab7c314",
    },
    {
      _id: "6602f5ee07a09e2fd1bdcc29",
      name: "Kevin Pollich's Campground",
      address: "Chiang Mai",
      tel: "820-808-6915",
      __v: 0,
      imgSrc: "/img/doi2.jpeg",
      bookings: [],
      id: "6602f5ee07a09e2fd1bdcc29",
    },
    {
      _id: "6602f936de90338fb07b59eb",
      name: "Meghan Dibbert's Campground",
      address: "Bangkok",
      tel: "768-911-2040",
      __v: 0,
      imgSrc: "/img/van.jpeg",
      bookings: [],
      id: "6602f936de90338fb07b59eb",
    },
  ],
  count: 3,
  pagination: {},
};

describe("CampCatalog Have all Data", () => {
  it("should have 3 Card", async () => {
    const campcatalog = await BookingCatalog({ campJson: mockResult });
    render(<SessionProvider session={null}>{campcatalog}</SessionProvider>);
    await waitFor(() => {
      const campImg = screen.getAllByRole("img");
      expect(campImg.length).toBe(3);
    });
  });

  it("should have Gail VonRueden's Campground name", async () => {
    const campcatalog = await BookingCatalog({ campJson: mockResult });
    render(<SessionProvider session={null}>{campcatalog}</SessionProvider>);
    await waitFor(() => {
      const camptext = screen.getByText(`Gail VonRueden's Campground`);
      expect(camptext).toBeInTheDocument();
    });
  });

  it("should have Kevin Pollich's Campground", async () => {
    const campcatalog = await BookingCatalog({ campJson: mockResult });
    render(<SessionProvider session={null}>{campcatalog}</SessionProvider>);
    await waitFor(() => {
      const camptext = screen.getByText(`Kevin Pollich's Campground`);
      expect(camptext).toBeInTheDocument();
    });
  });

  it("Should have Meghan Dibbert's Campground", async () => {
    const campcatalog = await BookingCatalog({ campJson: mockResult });
    render(<SessionProvider session={null}>{campcatalog}</SessionProvider>);
    await waitFor(() => {
      const camptext = screen.getByText(`Meghan Dibbert's Campground`);
      expect(camptext).toBeInTheDocument();
    });
  });
});
