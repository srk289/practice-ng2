import { Component, Input, OnChanges } from "@angular/core"
import { ISession } from "../index"
@Component({
    selector: 'session-list',
    templateUrl: '/app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions:ISession[]
    @Input() filterBy:string 
    @Input() sortBy:string

    visibleSessions:ISession[]

    ngOnChanges() {
        if(this.sessions) {
            if(this.filterBy === 'all')
                this.visibleSessions = this.sessions.slice(0)
            else
                this.visibleSessions = this.sessions.filter(session => session.level.toLowerCase() === this.filterBy)
            
            this.sortBy === 'voters' ? this.visibleSessions.sort(sortByVoters) : this.visibleSessions.sort(sortByNames)
        }
    }
}


function sortByNames(a, b) {
    if(a.name > b.name) 
        return 1
    else if(b.name > a.name)
        return 0
    else 
        return -1 
}

function sortByVoters(a:ISession, b:ISession) {
    return b.voters.length - a.voters.length 
}