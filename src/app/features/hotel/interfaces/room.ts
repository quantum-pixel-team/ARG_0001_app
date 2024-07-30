export interface RoomFacility {
  name: string;
  iconName: string;
  usageCount: number;
}

export interface HotelRoom {
  id: number;
  name: string;
  description: string;
  totalPrice: number;
  totalCapacity: number;
  imagesUrl: string[];
  availableRooms: number;
  minimumNights: number;
  facilities: RoomFacility[];
  bookNowUrl: string;
}
