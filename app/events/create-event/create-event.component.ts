import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { EventsService } from "../shared/index" 
import { IEvent } from "../index";

@Component({
  templateUrl: '/app/events/create-event/create-event.component.html',
  styles: [`
    .form-group>em{float: right; color: red}
    .error input {background: #E3C3C5}
    .error ::-webkit-input-placeholder {color: #999}
    .error ::-moz-placeholder {color: #999}
    .error :-moz-placeholder {color: #999}
    .error :ms-input-placeholder {color: #999}
  `]
})

export class CreateEventComponent {
  isDirty:boolean = false
  constructor(private eventsService: EventsService, private router: Router) {}

  cancel() {
    this.router.navigate(['events'])
  }

  saveEvent(eventDetails) {
    // this.eventsService.saveEvent(eventDetails) 
    this.eventsService.saveEvent(eventDetails) 
    this.isDirty = false
    this.router.navigate(['events'])
  }
}