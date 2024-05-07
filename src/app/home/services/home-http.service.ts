import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item';
import { HotelRoom } from '../interfaces/hotel-room';
import { HttpClient } from '@angular/common/http';
import { Event } from '../interfaces/event';

@Injectable({
  providedIn: 'root',
})
export class HomeHttpService {
  constructor(private http: HttpClient) {}

  getTopMenu(): MenuItem[] {
    return [
      {
        title: 'Spaghetti Carbonara',
        price: 12.99,
        imageUrl:
          'https://th.bing.com/th/id/OIG1.JMCrZ6IhMIEeJd4u5686?w=150&h=150&rs=1&pid=ImgDetMain',
      },
      {
        title: 'Margherita Pizza',
        price: 9.99,
        imageUrl:
          'https://th.bing.com/th/id/OIG4.WPF_t2ZMBEh9uMn4403Y?w=150&h=150&rs=1&pid=ImgDetMain',
      },
      {
        title: 'Grilled Salmon',
        price: 15.99,
        imageUrl:
          'https://th.bing.com/th/id/OIG4.ul.4RPIFeXpEdWactxgj?w=150&h=150&rs=1&pid=ImgDetMain',
      },
      {
        title: 'Caesar Salad',
        price: 8.99,
        imageUrl:
          'https://th.bing.com/th/id/OIG1.ILb4SLQaG8VZJ6nKRbzt?w=150&h=150&rs=1&pid=ImgDetMain',
      },
    ];
  }

  getTopDesserts(): MenuItem[] {
    return [
      {
        title: 'Chocolate Lava Cake',
        price: 7.99,
        imageUrl:
          'https://th.bing.com/th/id/OIG3.y8zYn77zjXAhUzsk0nUY?w=150&h=150&rs=1&pid=ImgDetMain',
      },
      {
        title: 'New York Cheesecake',
        price: 6.99,
        imageUrl:
          'https://th.bing.com/th/id/OIG3.wWRVYXFNrEtP__yIUmks?w=150&h=150&rs=1&pid=ImgDetMain',
      },
    ];
  }

  getRooms(): HotelRoom[] {
    return [
      {
        name: 'Single Room',
        facilities: ['Single Bed', 'Breakfast included', 'Free Wifi'],
        featureImageUrl: 'assets/single-room.png',
      },
      {
        name: 'Double Room',
        facilities: [
          'Perfect for traveling couples',
          'Double Bed',
          'Breakfast included',
          'Free Wifi',
        ],
        featureImageUrl: 'assets/double-room-1.png',
      },
      {
        name: 'Suite Room',
        facilities: [
          'Double Bed',
          'Single Bed',
          'Breakfast included',
          'Free Wifi',
        ],
        featureImageUrl: 'assets/suite-room.png',
      },
      {
        name: 'Double Room',
        facilities: [
          'Perfect for traveling couples',
          'Double Bed',
          'Breakfast included',
          'Free Wifi',
        ],
        featureImageUrl: 'assets/double-room-1.png',
      },
    ];
  }

  fetchTopEvents() {
    return this.http.get<Event[]>('events');
  }
}
