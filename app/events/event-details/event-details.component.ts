import { Component, OnInit } from "@angular/core"
import { EventsService } from "../shared/events-service"
import { IEvent } from "../shared/events-model"
import { ActivatedRoute } from "@angular/router"

@Component({
  templateUrl: '/app/events/event-details/event-details.component.html'
})

export class EventDetailsComponent implements OnInit{
  event:IEvent
  constructor(private eventsService: EventsService, private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.event = this.eventsService.getEvent(+this.activatedRoute.snapshot.params['id'])
  }
}