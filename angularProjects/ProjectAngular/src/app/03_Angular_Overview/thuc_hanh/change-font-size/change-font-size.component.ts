import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-font-size',
  templateUrl: './change-font-size.component.html',
  styleUrls: ['./change-font-size.component.scss']
})
export class ChangeFontSizeComponent implements OnInit {
  fontSize = 14;
  constructor() { }
  onChange(value) {
    this.fontSize = value;
  }
  ngOnInit() {
  }

}
