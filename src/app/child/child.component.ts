import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input()parentData:any=[]
@Output()emitData=new EventEmitter<string>()

viewchild="hi this is child"

sendtoparent(value:string){
this.emitData.emit(value)
}
  constructor() { }

  ngOnInit(): void {
  }

}
