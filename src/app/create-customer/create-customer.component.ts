import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  employee: Employee=new Employee();
  submit:boolean;

  constructor(private service:EmployeeService,
    private router:Router) {}

   
 

  ngOnInit() {
    this.submit=false;
  }

  createNewEmployee()
  {
    console.log("create method callled");
    if(this.employee!=null)
    {
      this.service.createEmployee(this.employee).
      subscribe(
        employee=>console.log(employee), error=>console.log(error)
      );
    }
    
    this.employee=new Employee();
  }

  onSubmit()
  {
    this.createNewEmployee();
  }

}
