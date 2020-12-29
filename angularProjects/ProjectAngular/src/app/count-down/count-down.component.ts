import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {
  countTime: number = 0;
  start: boolean;
  message: string;
  constructor() { }

  ngOnInit(): void {
  }

  changeCountTime(value: number) {
    this.countTime = value
  }

  startCount() {
    this.start = true;
    this.message = '';
  }

  finishHandler(value: boolean) {
    if(value == true) {
      this.message = 'Counting is finished!';
      this.start = false;
    }
  }
}
