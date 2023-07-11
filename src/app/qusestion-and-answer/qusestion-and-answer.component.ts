import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qusestion-and-answer',
  templateUrl: './qusestion-and-answer.component.html',
  styleUrls: ['./qusestion-and-answer.component.scss']
})
export class QusestionAndAnswerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  propertYName:string='{{}}';
}
