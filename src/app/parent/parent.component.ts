import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
@ViewChild(ChildComponent) childata!:ChildComponent

viewchilds=""
ngAfterViewInit(){this.viewchilds=this.childata.viewchild}

text:string=""
datatochild:any=[]

sendData(){
this.datatochild.push(this.text)
}

childmsg:any=[]
childdata(item:string){
this.childmsg.push(item)
console.log(this.childmsg);

}
  constructor() { }
  ngOnInit(): void {
  }


title="Upper Case"
num:number=1
todaydate=new Date()


}
