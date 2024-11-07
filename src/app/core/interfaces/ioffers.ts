export interface Ioffers {
  status: number;
  msg: string;
  data: Datum[];
}

export interface Datum {
  offer_id: number;
  tour_id: number;
  photo: string;
  offer_price_percent: string;
  offer_price_value: string;
  price: string;
  offer_name: string;
  special_price_start: string;
  special_price_end: string;
  country: string;
  city: string;
  street: string;
  is_favourite: boolean;
}