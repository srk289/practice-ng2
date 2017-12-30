import { Routes } from "@angular/router"
import { EventListComponent } from "./events/event-list.component"
import { CreateEventComponent } from "./events/create-event/create-event.component"

export const appRouter:Routes = [
  {path: 'events', component: EventListComponent},
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['createEventDeactivate']},
  {path: '', redirectTo: '/events', pathMatch: 'full'}
]