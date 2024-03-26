export type UserProfileResponse = {
  success: boolean;
  data: UserProfile
};
export type UserProfile = {
    _id: string;
    name: string;
    tel: string;
    email: string;
    role: string;
    createdAt: string;
}