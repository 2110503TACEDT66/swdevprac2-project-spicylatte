export interface Campgrounds {
  _id: string;
  name: string;
  address: string;
  district: string;
  province: string;
  postalcode: string;
  tel: string;
  region:string;
  picture: string;
  __v: number;
  id: string;
}

export interface HospitalJson {
  success: boolean;
  count: number;
  pagination: Object;
  data: Campgrounds[];
}
