import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Data} from '../app/model/Data.model'

@Injectable({
  providedIn: 'root'
})
export class ConsumeService {

  constructor(private hc:HttpClient) { }
  getData():Observable<Data[]>{
    return this.hc.get<Data[]>('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=hoeE1VO4zZ1IISrVirXujQtRWzLIF87dgorVW4ph')
    }
  getDataById(id):Observable<Data>{
      return this.hc.get<Data>('http://localhost:3000/users/'+id)
   }
  
}
