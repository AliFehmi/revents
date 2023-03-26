import { Component, OnInit } from '@angular/core';
import { Room, roomList } from './rooms';
import { RoomsService } from 'src/app/services/rooms.service';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
 
  hotelname = 'Hilton hotel';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }
  roomList: roomList[] = []

  constructor(private roomsService: RoomsService) { }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  selectedRoom!: roomList;
  selectRoom(room: roomList) {
    this.selectedRoom = room;
  }
  addRoom() {
    const room: roomList = {
      roomType: 'type1',
      amenities: 'amenity1, amenity11',
      price: 10,
      photos: '',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('12-Nov-2022'),
      roomNumber: 1,
    };

    this.roomList = [...this.roomList, room];
  }
  ngOnInit(): void {
    this.roomList= this.roomsService.getRooms();

  }

}
