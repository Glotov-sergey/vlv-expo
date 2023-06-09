export interface IUserRes {
  client: IUser;
}

export interface IUser {
  birth_date: string;
  bonus_points: number;
  client_group_id: number;
  contact_name: string;
  db_hidden: boolean;
  default_address: IUserAdress;
  default_address_id: number;
  default_client_group: IDefaultClientGroup;
  email: string;
  full_name: string;
  id: number;
  ip_addr: string;
  is_guest: boolean;
  middlename: string | null;
  name: string;
  phone: string;
  registered: boolean;
  surname: string;
  type: string;
}

interface IUserAdress {
  address: string;
  address_for_gis: string;
  area: string | null;
  area_type: string | null;
  city: string;
  country: string;
  db_hidden: boolean;
  flat: string | null;
  full_delivery_address: string;
  full_locality_name: string;
  house: string;
  id: number;
  is_kladr: boolean;
  kladr_code: string;
  kladr_zip: string;
  latitude: string;
  location_valid: boolean;
  longitude: string;
  phone: string;
  region_zip: string;
  settlement: string | null;
  settlement_type: string | null;
  state: string;
  street: string;
  street_type: string;
  zip: string;
}

interface IDefaultClientGroup {
  db_hidden: boolean;
  discount: string | null;
  discount_description: string;
  id: number;
  is_default: boolean;
  title: string;
}
