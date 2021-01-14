import { Component } from '@angular/core';
import { Poll } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  activePoll= null;

  polls: Poll[] = [{
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
];

setActivePoll(poll: null) {
  this.activePoll = null;

  setTimeout(() => {
    this.activePoll = poll;
  }, 100);
}

}
