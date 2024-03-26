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
  bookings: [];
  id: string;
  imgSrc: string;
  tel:string;
};
