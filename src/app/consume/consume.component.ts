import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Data }  from '../model/Data.model';
import {ConsumeService} from '../consume.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-consume',
  templateUrl: './consume.component.html',
  styleUrls: ['./consume.component.css']
})
export class ConsumeComponent implements OnInit,OnDestroy{
mySubscription:Subscription;
myData:Data[]=[];
data 
constructor(private fsObj:ConsumeService,private router:Router) { }
ngOnInit(): void {
    this.mySubscription= this.fsObj.getData().subscribe(
      userData=>{
        this.data=userData;
        console.log(this.data)
       },
      err=>{
        console.log("err in getting data",err)
      }

    )
  }
  onSelectId(id){
    this.router.navigateByUrl('user/'+id)
  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }
}
