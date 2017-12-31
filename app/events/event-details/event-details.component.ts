import { Component, OnInit } from "@angular/core"
import { EventsService } from "../shared/events-service"
import { IEvent } from "../shared/events-model"
import { ActivatedRoute, Router } from "@angular/router"

@Component({
  templateUrl: '/app/events/event-details/event-details.component.html'
})

export class EventDetailsComponent implements OnInit{
  event:IEvent
  constructor(private router: Router, private eventsService: EventsService, private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    let event = this.eventsService.getEvent(+this.activatedRoute.snapshot.params['id'])
    if(!(!!event))
      this.router.navigate(['404'])
    this.event = event
  }
}