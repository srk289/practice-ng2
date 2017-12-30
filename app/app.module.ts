import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule } from "@angular/router"
import { EventsApp } from "./events-app"
import { EventListComponent } from "./events/event-list.component"
import { EventsService } from "./events/shared/events-service"
import { EventThumbComponent } from "./events/event-thumb.component"
import { appRouter } from "./router";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter)
  ],
  declarations: [EventsApp, EventListComponent, EventThumbComponent],
  bootstrap: [EventsApp],
  providers: [
    EventsService
  ]
})

export class AppModule{}