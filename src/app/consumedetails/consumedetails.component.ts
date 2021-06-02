import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from '../model/Data.model';
import {ConsumeService} from '../consume.service';
@Component({
  selector: 'app-consumedetails',
  templateUrl: './consumedetails.component.html',
  styleUrls: ['./consumedetails.component.css']
})
export class ConsumedetailsComponent implements OnInit {
  dataObj:Data
  constructor(private ar:ActivatedRoute,private fs:ConsumeService) { }

  ngOnInit(): void {
    let id=this.ar.snapshot.params.id;
    this.fs.getDataById(id).subscribe(
      obj=>{
        this.dataObj=obj;
      },
      err=>{
        console.log("err in reading data",err)
      }
    )
  }
}
