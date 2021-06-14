import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-srch-elastic',
  templateUrl: './srch-elastic.component.html',
  styleUrls: ['./srch-elastic.component.css']
})
export class SrchElasticComponent implements OnInit {

  text1:string;
  employeeList:Observable<Employee[]>;
  constructor(private service: EmployeeService) { }


  ngOnInit() {
  }
  
  searchElastic(text1: string) {
    console.log("search string is "+text1);
        this.employeeList=this.service.searchThroughText(text1);
        console.log(this.employeeList);
  }

}
