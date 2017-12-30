import { Component, OnInit } from "@angular/core"
import { IEvent } from "./shared/events-model"
import { EventsService } from "./shared/events-service"
import { Router } from "@angular/router"

@Component({
  selector: 'event-list',
  template: `
  <div>
    <h1>Upcoming Events</h1>
    <hr/>
    <event-thumb 
      *ngFor="let event of events" 
      [event]="event"
      (click)="handleEventClick(event)"></event-thumb>
  </div>
  <button class="btn btn-primary">Click</button>
  `
})

export class EventListComponent implements OnInit {
  events:IEvent[]

  constructor(private eventsService: EventsService, private router: Router) {
  }

  ngOnInit() {
    this.eventsService.getEvents().subscribe(events => {
      this.events = events
    })
  }

  handleEventClick(ev) {
    this.router.navigate(['events', ev.id])
  }
}