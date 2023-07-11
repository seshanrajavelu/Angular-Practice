import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.scss']
})
export class LifeCycleHooksComponent implements OnInit {
  @Input() titles=" "

  constructor() {console.log("constructor") }

  ngOnInit(): void { console.log("ngOnInit")}

  ngOnChanges():void{console.log("ngOnChanges")}

  ngDoCheck():void{console.log("ngDoCheck")}

  ngAfterContentInit():void{ console.log("ngAfterContentInit")}

  ngAfterContentChecked():void{ console.log("ngAfterContentChecked")}

  ngAfterViewInit():void{console.log("ngAfterViewInit")}

  ngAfterViewChecked():void{console.log("ngAfterViewChecked")}

  ngOnDestroy():void { console.log("ngOnDestroy")}

}
