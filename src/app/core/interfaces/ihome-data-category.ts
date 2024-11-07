export interface IhomeDataCategory {
  status: number;
  msg: string;
  data: Datum[];
}

interface Datum {
  id: number;
  photo: string;
  name: string;
  description: string;
}
