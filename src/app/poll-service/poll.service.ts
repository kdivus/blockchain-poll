import { Injectable } from '@angular/core';
import { off } from 'process';
import { from, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
//import { Observable } from "rxjs/Observable";
//import "rxjs/add/observable/of";
import { Poll, PollForm } from '../types';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor() { }

  getPolls(): Observable<Poll[]> {
    return of([
    {
      id: 1,
      question: 'Do you like dogs or cats?',
      thumbnail: 'https://images.pexels.com/photos/1567681/pexels-photo-1567681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      results: [0, 1, 5],
      options: ["Cats", "Dogs", "None"],
      voted: true,
    },
    {
      id: 2,
      question: 'Best month for summer holidays?',
      thumbnail: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      results: [1, 6, 4],
      options: ["June", "July", "August"],
      voted: false,
    }
  ]).pipe(delay(2000));
  }

  vote(pollId: number, voteNumber: number) {
    console.log(pollId, voteNumber)
  }

  createPoll(poll: PollForm) {
    console.log(poll);
  }
}
