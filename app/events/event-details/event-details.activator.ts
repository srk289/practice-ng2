import { Injectable } from "@angular/core"
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router"
import { EventsService } from "../shared/events-service";

@Injectable()
export class EventDetailsActivator implements CanActivate {
  constructor(private eventsService: EventsService, private router: Router) {}

  canActivate(activatedRouteSnapShot: ActivatedRouteSnapshot) {
    let eventExists = !!this.eventsService.getEvent(+activatedRouteSnapShot.params['id'])
    if(!eventExists) 
      this.router.navigate(['404'])
    return eventExists
  }
}