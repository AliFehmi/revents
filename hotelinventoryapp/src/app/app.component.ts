import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomComponent } from './components/room/room.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // ngAfterViewInit(): void {
  //   const componentRef=this.vcr.createComponent(RoomComponent);
  //   componentRef.instance.numberOfRooms=50;
  // }
  @ViewChild('name', {static:true}) name!: ElementRef;
  
  // @ViewChild('user', {read: ViewContainerRef}) vcr !: ViewContainerRef;
  title = 'hotelinventoryapp';
  ngOnInit(): void {
    this.name.nativeElement.innerText="Hilton Hotteell";
  }
  
}
