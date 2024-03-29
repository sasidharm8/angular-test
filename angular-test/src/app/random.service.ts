import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RandomService {
  apiUrl="https://randomuser.me/api/?results="
  constructor(private http: HttpClient) {
   
   }
    getUserDetails(numberOfRecords:string):Observable<any>{
        return this.http.get(this.apiUrl+numberOfRecords)
    }

}