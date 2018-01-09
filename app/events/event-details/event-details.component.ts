import { Component, OnInit } from "@angular/core"
import { EventsService } from "../shared/events-service"
import { IEvent } from "../shared/events-model"
import { ActivatedRoute, Params } from "@angular/router"
import { ISession } from "../index";


@Component({
  templateUrl: '/app/events/event-details/event-details.component.html',
  styles: [`
    a {cursor: pointer; float: right}
  `]
})

export class EventDetailsComponent implements OnInit{
  event:IEvent
  addSession:boolean
  filterBy:string = 'all'
  sortBy:string = 'name'

  constructor(private eventsService: EventsService, private activatedRoute: ActivatedRoute) {}
  
  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      this.event = this.eventsService.getEvent(+params['id'])
      this.addSession = false
    })
    this.event = this.eventsService.getEvent(+this.activatedRoute.snapshot.params['id'])
  }

  saveSession(session:ISession) {
    session.id = Math.max.apply(null, this.event.sessions.map(i => i.id)) + 1
    this.event.sessions.push(session)
    this.eventsService.updateEvent(this.event)
    this.addSession = false
  }
}