import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-all-component',
  templateUrl: './find-all-component.component.html',
  styleUrls: ['./find-all-component.component.css']
})
export class FindAllComponentComponent implements OnInit {

  employeeList:Observable<Employee[]>;
  
  constructor(private service:EmployeeService, private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }
 deleteEmployee(id:number)
 {
   /*
var msg=this.service.deleteEmployeeByID(id);
   console.log("after service call "+msg);
   this.reloadData();

   */
  
  this.service.deleteEmployeeByID(id).subscribe(
    data=>{
      console.log(data);
      this.reloadData();
    },
    error=>console.log(error)
 );
  }
 updateEmployee(id:number)
 {
   this.router.navigate(['update',id]);
  
 }
   
 
 
  reloadData()
  {
    this.employeeList=this.service.getAllEmployee();
  }

}
