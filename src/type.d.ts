export type UserProfileResponse = {
  success: boolean;
  data: UserProfile;
};
export type UserProfile = {
  _id: string;
  name: string;
  tel: string;
  email: string;
  role: string;
  createdAt: string;
};

export type Campgrounds = {
  _id: string;
  name: string;
  address: string;
  __v: number;
  bookings: Booking[];
  id: string;
  imgSrc: string;
  tel: string;
};

export type Booking = {
  _id: string;
  bookDate: string;
  user: string;
  campground: Campground;
  createdAt: string;
};
export type Campground = {
  _id: string;
  name: string;
  tel: string;
  id: string;
  address: string;
  imgSrc?: string;
};
