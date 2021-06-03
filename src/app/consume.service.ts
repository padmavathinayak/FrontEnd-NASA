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
    return this.hc.get<Data[]>('http://localhost:3000/photos')
    }
  getDataById(id):Observable<Data>{
      return this.hc.get<Data>('http://localhost:3000/photos/'+id)
   }
  
}
