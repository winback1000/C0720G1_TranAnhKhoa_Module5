import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from "../../model/IStudent";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {StudentService} from "../../student.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  student: IStudent;
  sub: Subscription;
  
  constructor(private activatedRoute: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id= parseInt(paramMap.get('id'));
      this.student = this.studentService.findById(id);
    })
  }
}
