import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-remain-time',
  templateUrl: './remain-time.component.html',
  styleUrls: ['./remain-time.component.scss']
})
export class RemainTimeComponent implements OnInit {
  private intervalId = 0;
  @Input()
  countTime: number;
  @Output()
  finish = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.start()
  }
  start(){
    this.intervalId = window.setInterval(() => {
      this.countTime -= 0.3;
      if (this.countTime <= 0) {
        this.stop();
        this.finish.emit(true);
      }
    }, 100);
  }

  stop() {
    clearInterval(this.intervalId)
  }
}
