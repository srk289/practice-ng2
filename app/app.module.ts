import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule } from "@angular/router"
import { appRouter } from "./router"

import { EventsApp } from "./events-app"
import { NavBarComponent } from "./nav/nav-bar.component"

import { EventListComponent } from "./events/event-list.component"
import { EventThumbComponent } from "./events/event-thumb.component"
import { EventsService } from "./events/shared/events-service"
import { CreateEventComponent } from "./events/create-event/create-event.component"
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { Http404 } from "./errors/404.component";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter)
  ],
  declarations: [
    EventsApp, 
    NavBarComponent,
    EventListComponent, 
    EventThumbComponent,
    CreateEventComponent,
    EventDetailsComponent,
    Http404
  ],
  bootstrap: [EventsApp],
  providers: [
    EventsService,
    {
      provide: 'createEventDeactivate',
      useValue: createEventDeactivate
    }
  ]
})

export class AppModule{

}

function createEventDeactivate(createEventComp: CreateEventComponent) {
  if(createEventComp.isDirty)
    return window.confirm('Do you want to exit without saving?')

  return true
}