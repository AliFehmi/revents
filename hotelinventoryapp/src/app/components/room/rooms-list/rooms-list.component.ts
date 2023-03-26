import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { roomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit {
  ngOnInit(): void {
    
  }

  constructor() {}

  @Input() rooms: roomList[] = [];
  @Output() selectedRoom= new EventEmitter<roomList>();

  selectRoom(room: roomList) {
    this.selectedRoom.emit(room);
  }


}
