import { Component } from "@angular/core"
import { UserAuthenticate } from "../user/shared/user.authenticate";
import { ICurrentUser } from "../user/shared/user.model";
import { ISession, EventsService } from "../events/index"
import { Router } from "@angular/router";

@Component({
  selector: 'nav-bar',
  templateUrl: '/app/nav/nav-bar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    li > a.active { color: #f97927 }
    @media (max-width: 1200px) {
      #searchForm {display: none}
    }
  `]
})

export class NavBarComponent{
  user:ICurrentUser
  searchTerm:string = ""
  searchResults:ISession[] = []
  constructor(private auth: UserAuthenticate, private eventsService: EventsService, private router: Router) {}

  isAuthenticated() {
    let isAuthenticated = this.auth.isAuthenticated()
    if(isAuthenticated)
      this.user = this.auth.currentUser
    return isAuthenticated
  }

  searchSession(term) {
    this.eventsService.searchSessions(term).subscribe((sessions) => {
      this.searchResults = sessions
    })
  }

  eventClick(eventId) {
    this.router.navigate(['/events', eventId])
  }
}