import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  @Input()rowData:any=[]

  constructor() { }

  ngOnInit(): void { }
  
  userForm = new FormGroup({
    make:new FormControl("",[Validators.required]),
    model:new FormControl(""),
    price:new FormControl(""),
  })
  get email(){
    return this.userForm.get("email")
  }
  submit(){
    console.log(this.userForm.value)
  }

}
