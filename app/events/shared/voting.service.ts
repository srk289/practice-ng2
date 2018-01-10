import { Injectable } from "@angular/core";
import { ISession } from "../index";


@Injectable()
export class VotingService {
  deleteVoter(session:ISession, user:string) {
    session.voters = session.voters.filter(voter => voter !== user)
  }

  addVoter(session:ISession, user:string) {
    session.voters.push(user)
  }

  hasVoted(session:ISession, user:string) {
    return session.voters.includes(user)
  }
}