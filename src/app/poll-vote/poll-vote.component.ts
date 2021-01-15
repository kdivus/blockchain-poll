import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import ApexCharts from 'apexcharts';
import { PollVote } from '../types';

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.css']
})
export class PollVoteComponent implements AfterViewInit {

  @Input() voted: boolean = false;
  @Input() options: string[] = [];
  @Input() results: number[] = [];
  @Input() question: string[] = [];
  @Input() id!: number;

  @Output() pollVoted: EventEmitter<> = new EventEmitter();

  voteForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.voteForm = this.fb.group({
      selected: this.fb.control('', [Validators.required]),
    })
  }
  ngAfterViewInit(): void {
    if(this.voted) {
    this.generateChart();
  }
}

  submitForm() {
    const pollVoted: PollVote = {
      id: this.id,
      vote: this.voteForm.get("selected")?.value
    }

    this.pollVoted.emit(pollVoted);
  }

  generateChart() {
    const options: ApexCharts.ApexOptions = {
        series: [{
          //name: "Desktops",
          data: this.results
      }],
        chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Title',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: this.options,
      }
    };



    //const chart = new ApexCharts(document.getElementById('poll-results'), options);
    const chart = new ApexCharts(document.querySelector("#poll-results"), options);
    chart.render();

  }
}
