import {Component, ViewChild} from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-data-transfer',
  templateUrl: './data-transfer.component.html',
  styleUrls: ['./data-transfer.component.scss']
})
export class DataTransferComponent{
  // ClickCounter: number = 0;
  //
  // constructor() { }
  //
  // ngOnInit(): void {
  // }
  //
  // countChangedHandler(count: number) {
  //   this.ClickCounter = count;
  //   console.log(count);
  // }

  // title = 'Parent interacts with child via local variable';

  title = 'Parent calls an @ViewChild()';

  @ViewChild(ChildComponent) child: ChildComponent;

  num : number;

  increment() {
    this.child.increment();
    this.num = this.child.count;
  }

  decrement() {
    this.child.decrement();
    this.num = this.child.count;
  }
}
