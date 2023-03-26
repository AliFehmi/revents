import { Injectable } from '@angular/core';
import { roomList } from '../components/room/rooms';
@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: roomList[]= [
    {
    roomType: 'type1',
    amenities: 'amenity1, amenity11',
    price: 10,
    photos: '',
    checkinTime: new Date('11-Nov-2022'),
    checkoutTime: new Date('12-Nov-2022'),
    roomNumber: 1,
    },
    {
      roomType: 'type2',
      amenities: 'amenity2, amenity22',
      price: 110,
      photos: '',
      checkinTime: new Date('12-Nov-2022'),
      checkoutTime: new Date('13-Nov-2022'),
      roomNumber: 2,
      },
    {
      roomType: 'type1',
      amenities: 'amenity3, amenity33',
      price: 1110,
      photos: '',
      checkinTime: new Date('13-Nov-2022'),
      checkoutTime: new Date('14-Nov-2022'),
      roomNumber: 3,
      }
    ]
  constructor() { }
  getRooms(){
    return this.roomList;
  }
}
