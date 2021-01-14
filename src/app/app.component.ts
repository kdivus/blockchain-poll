import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;

  polls = [{
    question: 'Do you like dogs or cats?',
    image: 'https://images.pexels.com/photos/1567681/pexels-photo-1567681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    votes: [0, 1, 5],
    voted: true,
  },
  {
    question: 'Best month for summer holidays?',
    image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    votes: [1, 6, 4],
    voted: false,
  }
]
}
