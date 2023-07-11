import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef} from 'ag-grid-community';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {


  constructor(private rout:Router) { }
  Data:any=[]
  ngOnInit(): void {
  }
  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field:" select", 
      
      cellRenderer:(params:any)=>{
        return `<button style="color:#337ab7;border:none;
        box-shadow:1px 1px 1px 0px;border-radius:3px;"><i class="fas fa-edit"></i></button>`
      },
      onCellClicked:this.sendData.bind(event)
    }
];

rowData= [
    { make: 'Toyota', model: 'Supra', price: 35000 },
    { make: 'Ford', model: 'Mustang', price: 32000 },
    { make: 'Porsche', model: '911', price: 72000 },
    { make: 'Ferrari', model: 'F8', price: 250000 },
    { make: 'Audi', model: 'R8', price: 20000 }
];
sendData(e){
 
  console.log(e.node.data);
  this.Data=[]
  this.Data.push(e.node.data)
  
}

}
