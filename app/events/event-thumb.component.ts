import { Component, Input } from "@angular/core"
import { IEvent } from "./shared/events-model";

@Component({
  selector: 'event-thumb',
  template: `
  <div class="well hoverwell thumbnail">
    <h2>{{event?.name | uppercase }}</h2>
    <div>Date: {{event.date | date:'shortDate' }}</div>
    <div [ngSwitch]="event.time">
      Time: {{event.time}} 
      <span [ngClass]="getClassName()" *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: {{event.price | currency:'USD':true}}</div>
    <div [hidden]="!event.location">
      <span>Location: {{event?.location?.address}}</span>
      <span>&nbsp;</span>
      <span>{{event.location?.city}}, {{event.location?.country}}</span>
    </div>
    <div [hidden]="!event.onlineUrl">
      <span>Online: {{event.onlineUrl}}</span>
    </div>
  </div>
  `,
  styles: [`
    .green {color: green !important}
  `]
})

export class EventThumbComponent {
  @Input() event:IEvent
  getClassName() {
    return 'green'
  }
}