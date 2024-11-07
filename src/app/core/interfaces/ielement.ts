export interface Ielement {
  status: number;
  msg: string;
  data: Data;
}

export interface Data {
  id: number;
  trip_id: number;
  trip_name: string;
  duration: number;
  offer_price_percent: null;
  price: string;
  photos: string[];
  video: null;
  name: string;
  description: string;
  services: string[];
  additional_data: string[];
  country: string;
  city: string;
  street: string;
  is_favourite: boolean;
  favourite: boolean;
}
