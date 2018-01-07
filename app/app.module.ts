import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule } from "@angular/router"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { appRouter } from "./router"

import { EventsApp } from "./events-app"
import { NavBarComponent } from "./nav/nav-bar.component"
import { Http404 } from "./errors/404.component"

import { EventListComponent,
         EventThumbComponent,
         EventsService, 
         CreateEventComponent,
         EventDetailsComponent,
         EventDetailsActivator,
         EventListResolver,
         CreateSessionComponent, 
         SessionListComponent,
         DurationPipe} from "./events/index"
import { UserAuthenticate } from "./user/shared/user.authenticate"
import { ContainerWellComponent } from "./common/container-well.component"

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouter),
  ],
  declarations: [
    EventsApp, 
    NavBarComponent,
    EventListComponent, 
    EventThumbComponent,
    CreateEventComponent,
    EventDetailsComponent,
    CreateSessionComponent,
    SessionListComponent,
    ContainerWellComponent,
    DurationPipe,
    Http404
  ],
  bootstrap: [EventsApp],
  providers: [
    EventsService,
    EventDetailsActivator,
    EventListResolver,
    {
      provide: 'createEventDeactivate',
      useValue: createEventDeactivate
    },
    UserAuthenticate
  ]
})

export class AppModule{

}

function createEventDeactivate(createEventComp: CreateEventComponent) {
  if(createEventComp.isDirty)
    return window.confirm('Do you want to exit without saving?')

  return true
}