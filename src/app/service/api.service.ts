import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<any>("https://localhost:44314/api/Values")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
