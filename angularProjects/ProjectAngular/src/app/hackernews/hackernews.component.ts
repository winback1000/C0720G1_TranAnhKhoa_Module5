import { Component, OnInit } from '@angular/core';
import {IArticle} from "./model/IArticle";
import {forEachComment} from "tslint";

@Component({
  selector: 'app-hackernews',
  templateUrl: './hackernews.component.html',
  styleUrls: ['./hackernews.component.scss']
})
export class HackernewsComponent implements OnInit {
  newId: number;
  newTitle: string;
  newUrl: string;
  blankArticle = {
    id: 0,
    title: '',
    url: '',
  }
  articles: IArticle[] = [
    {
      id: 1,
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    },
    {
      id: 2,
      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html'
    },
    {
      id: 3,
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
    },
    {
      id: 4,
      title: 'Why You Only Need to Test with 5 Users',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
    },
    {
      id: 5,
      title: 'Let’s Build A Web Server. Part 1.',
      url: 'https://ruslanspivak.com/lsbaws-part1/'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addArticleHandler(article: IArticle) {
    for (let i = 0; i < this.articles.length; i++) {
      if(article.id <= this.articles[i].id) {
        article.id = this.articles[i].id ++;
      }
    }
    this.newId= article.id;
    this.newTitle= article.title;
    this.newUrl= article.url;
    this.articles.push({
      id: this.newId,
      title: this.newTitle,
      url: this.newUrl
    });

    this.blankArticle.id = 0;
    this.blankArticle.title = '';
    this.blankArticle.url = '';
  }
}
