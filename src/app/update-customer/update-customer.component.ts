import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'util';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id:number;
  empl:Employee;
  constructor(private service:EmployeeService, private route:ActivatedRoute,private router:Router) { }

  epmloyee:Employee;
  ngOnInit() {
    this.empl=new Employee();
    this.id=this.route.snapshot.params['id'];

    this.service.getEmployeeByID(this.id).
    subscribe(data=>{

      console.log(data)
      this.empl=data;
    },
    error=>console.log(error)   
    
    ); 
    
  }

  onSubmit()
  {
    this.updateEmployee();
  }

  updateEmployee()
  {
    console.log("welcome to update component");
    this.service.updateEmployee(this.empl).subscribe
    (
      data => console.log(data), error => console.log(error)

    );
    this.empl=new Employee();
    this.router.navigate(['findAll']);
  }

}
