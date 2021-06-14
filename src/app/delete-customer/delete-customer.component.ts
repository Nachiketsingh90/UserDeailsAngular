import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  id :number
  constructor(private service:EmployeeService) { }

  ngOnInit() {
  }

  deleteCustomer()
  {
    this.service.deleteEmployeeByID(this.id).subscribe
    (
      employee=>console.log(employee), error=>console.log(error)
    )
  }

}
