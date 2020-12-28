import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'child-component',
  // template: '<h2>Child Component</h2>' +
  //   ' <button (click)="increment()">Increment</button>' +
  //   ' <button (click)="decrement()">decrement</button>' +
  //   ' current count is {{count}}'
  templateUrl: './child.component.html'
})
export class ChildComponent {
  // @Input() count: number = 8;
  //
  // @Output() countChanged: EventEmitter<number> =   new EventEmitter();
  //
  // increment() {
  //   this.count++;
  //   this.countChanged.emit(this.count);
  // }
  // decrement() {
  //   this.count--;
  //   this.countChanged.emit(this.count);
  // }

  count: number = 0;

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
