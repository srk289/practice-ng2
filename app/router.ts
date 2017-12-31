import { Routes } from "@angular/router"
import { EventListComponent } from "./events/event-list.component"
import { CreateEventComponent } from "./events/create-event/create-event.component"
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { Http404 } from "./errors/404.component";

export const appRouter:Routes = [
  {path: 'events', component: EventListComponent},
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['createEventDeactivate']},
  {path: 'events/:id', component: EventDetailsComponent},
  {path: '404', component: Http404},
  {path: '', redirectTo: '/events', pathMatch: 'full'}
]