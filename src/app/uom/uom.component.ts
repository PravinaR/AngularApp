import { Component, OnInit } from '@angular/core';
import {Service1Service} from 'src/app/service1.service';
import {UOM} from 'src/app/uom';


@Component({
  selector: 'app-uom',
  templateUrl: './uom.component.html',
  styleUrls: ['./uom.component.css']
})
export class UOMComponent implements OnInit {

  constructor(public s1:Service1Service) { }
uom:UOM=new UOM();
  ngOnInit() {
  }
 Save(){
    this.s1.con.invoke("UOM_Save",this.uom);
    this.s1.getList();
    return this.uom;
  }
Delete(d){
  
 
    this.s1.con.invoke("UOM_Delete",this.uom.Id);
    this.s1.getList();
    this.uom=new UOM();

  
}
Edit(d:UOM):UOM{
  this.uom=this.s1.uomList.find(x=>x.Id==d.Id);
  return this.uom;
}
Clear(){
  this.uom=new UOM();
}
}
