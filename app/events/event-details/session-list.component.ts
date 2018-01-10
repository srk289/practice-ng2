import { Component, Input, OnChanges } from "@angular/core"
import { UserAuthenticate } from "../../user/shared/user.authenticate"
import { ISession, EventsService, VotingService } from "../shared/index"

@Component({
    selector: 'session-list',
    templateUrl: '/app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions:ISession[]
    @Input() filterBy:string 
    @Input() sortBy:string

    visibleSessions:ISession[]
    constructor(private auth: UserAuthenticate, private votingService: VotingService) {}

    ngOnChanges() {
        if(this.sessions) {
            this.visibleSessions = this.filterBy === 'all' ? 
                                    this.sessions.slice(0) :
                                    this.sessions
                                        .filter(session => session.level.toLowerCase() === this.filterBy)
            
            this.sortBy === 'voters' ? this.visibleSessions.sort(sortByVoters) : this.visibleSessions.sort(sortByNames)
        }
    }

    toggleVotes(session:ISession) {
        if(this.hasVoted(session)) {
            this.votingService.deleteVoter(session, this.auth.currentUser.username)
        } else {
            this.votingService.addVoter(session, this.auth.currentUser.username)
        }
        if(this.sortBy === "voters")
            this.visibleSessions.sort(sortByVoters)
    }

    hasVoted(session:ISession) {
        return this.votingService.hasVoted(session, this.auth.currentUser.username)
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