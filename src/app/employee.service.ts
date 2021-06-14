import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  private baseURl:string="http://localhost:8081";

  getAllEmployee():Observable<any>
  {
    return this.http.get(`${this.baseURl}/findAllUsers`);
  }

  getEmployeeByID( id:number):Observable<any>
  {
    return this.http.get(`${this.baseURl}/findUserById/${id}`);
  }
  deleteEmployeeByID( id:number):Observable<any>
  {
    console.log('in service delete '+id);
    return this.http.delete(`${this.baseURl}/deleteUserById/${id}`,{ responseType: 'text' });
  }

  createEmployee(employee:Object):Observable<Object>{
    return this.http.post(`${this.baseURl}/addUser`,employee);
  }

  updateEmployee(employee:Object):Observable<Object>{
    return this.http.put(`${this.baseURl}/updateUser`,employee);
  }

  getEmployeeByCompany( company:string)
  {
    return this.http.get(`${this.baseURl}/findUsersByCompany/${company}`);
  }
 searchThroughText( text:string):Observable<any>
  {
    console.log('URL '+`${this.baseURl}/findThrElastic/${text}`);
    return this.http.get(`${this.baseURl}/findThrElastic/${text}`);
  }
}
