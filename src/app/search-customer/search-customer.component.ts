import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {

  havetoShowGrid=false;
  haveToShowMsg=false;

  emp_id: number;
  havetoShow: boolean;
  msg:string;
  showMsg:boolean
  employeebyID: Observable<Employee>;
  employees: Employee[];
  grid:boolean;
  msgdis:boolean;

  
  constructor(private service: EmployeeService) { }

  ngOnInit() {
    
    this.havetoShowGrid = false;
    this.haveToShowMsg = false;   
    //this.displayNone();
    var x=document.getElementById("msgdis");
    var y=document.getElementById("grid");

    //y.style.visibility=false;
  }

  displayNone()
  {
    
    
   // y.style.display="block";
    

  }
  displayMsg(id:number):void
     {
       this.havetoShow=false;
       this.msg="Employee with id "+id+" not found";

     }
    
     displayContent(employees1:any)
     {
      this.employeebyID=employees1;
     }


  searchEmployee(emp_id: number) {
    
    this.service.getEmployeeByID(emp_id).
      subscribe(
        
        employees1 =>this.displayContent(employees1),

        error=>this.displayMsg(emp_id)
        
       
      );

     
  }
}
