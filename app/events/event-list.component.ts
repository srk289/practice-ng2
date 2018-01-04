import { Component, OnInit } from "@angular/core"
import { IEvent } from "./shared/events-model"
import { Router, ActivatedRoute } from "@angular/router"

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

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.events = this.activatedRoute.snapshot.data.events
  }

  handleEventClick(ev) {
    this.router.navigate(['events', ev.id])
  }
}