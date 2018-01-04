import { Routes } from "@angular/router"
import { Http404 } from "./errors/404.component"
import { UserModule } from './user/user.module'

import { 
        EventListComponent,
        CreateEventComponent,
        EventDetailsComponent,
        EventDetailsActivator,
        EventListResolver 
      } from "./events/index"

export const appRouter:Routes = [
  {path: 'events', component: EventListComponent, resolve: {events: EventListResolver}},
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['createEventDeactivate']},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventDetailsActivator]},
  {path: '404', component: Http404},
  {path: 'user', loadChildren: '/app/user/user.module#UserModule'},
  {path: '', redirectTo: '/events', pathMatch: 'full'}
]