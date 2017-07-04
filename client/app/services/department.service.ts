import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DepartmentService {
 
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });;
  
  constructor(private http: Http) { }

   addDepartment(dept): Observable<any> {
   	console.log("here");
   	console.log(dept);
    return this.http.post('/api/cat', JSON.stringify(dept), this.options);
  }

}
