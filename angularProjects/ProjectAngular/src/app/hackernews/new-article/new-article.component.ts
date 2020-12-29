import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {IArticle} from "../model/IArticle";

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {
  @Input()
  newArticle: IArticle;
  @Output()
  addArticle : EventEmitter<IArticle> =   new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  updateArticle() {
      this.addArticle.emit(this.newArticle);
  }

}
