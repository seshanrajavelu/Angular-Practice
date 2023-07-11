import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  constructor() { }
  ngOnInit(): void { }
  
userForm= new FormGroup({
  email:new FormControl("",[Validators.required]),
  name:new FormControl(""),
  age:new FormControl(""),
  password:new FormControl("")
})
get email(){
  return this.userForm.get("email")
}
submit(){
  console.log(this.userForm.value)
}
}
