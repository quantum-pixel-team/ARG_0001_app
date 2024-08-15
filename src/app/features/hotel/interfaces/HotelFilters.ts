export interface HotelFilters {
  roomTypes: string[];
  available: boolean;
  minPrice: number | null;
  maxPrice: number | null;
  sort: 'ASC' | 'DESC' | null;
}

export interface HotelQueryParams {
  pageIndex: number;
  pageSize: number;
  checkInDate: Date;
  checkOutDate: Date;
  numberOfRooms: number;
  numberOfAdults: number;
  available: boolean;
  language: string;
  childrenAges: number[];
  roomTypes: string[];
  minPrice: number | null;
  maxPrice: number | null;
  roomFacilities: string[];
  sort: 'ASC' | 'DESC' | null;
}

export interface BookNowFilters {
  numberOfRooms: number;
  numberOfAdults: number;
  numberOfChildren: number;
  checkInDate: Date;
  checkOutDate: Date;
  childrenAges: number[];
}
