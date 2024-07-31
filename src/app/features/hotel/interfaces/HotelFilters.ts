export interface HotelFilters {
  roomTypes: string[];
  minPrice: number | null;
  maxPrice: number | null;
  sortOrder: 'ASC' | 'DESC';
}
export interface HotelQueryParams {
  pageIndex: number;
  pageSize: number;
  checkInDate: Date;
  checkOutDate: Date;
  numberOfRooms: number;
  numberOfAdults: number;
  childrenAges: number[];
  roomTypes: string[];
  minPrice: number | null;
  maxPrice: number | null;
  roomFacilities: string[];
  sort: 'ASC' | 'DESC';
}
export interface BookNowFilters {
  numberOfRooms: number;
  numberOfAdults: number;
  numberOfChildren: number;
  checkInDate: Date;
  checkOutDate: Date;
}
