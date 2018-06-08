import { Component } from '@angular/core';

import { Service1Service } from './service1.service';
import {UOM} from 'src/app/UOM';
import { Observable,of } from 'rxjs';
import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public s1:Service1Service, 
              
  ){}
  name:string;
  message:string;
 
uom:UOM=new UOM();

ngOnInit()
{
  console.log("app component");
 // this.s1.getUOMList();
  
}
getList()
{
 // this.s1.getUOMList();
  
}
  send(){
    //this.s1.con.invoke("send",this.name,this.message);
    this.s1.con.invoke("UOM_List").then(x=>
      {
        console.log(x);
      }
    )
  }
Edit(d:UOM):UOM
{
     console.log(d.Id);
     this.uom=this.s1.uomList.find(x=>x.Id==d.Id);
  return this.uom;
}
  Save()
  {
    this.s1.con.invoke("UOM_Save", this.uom); 
    
    this.s1.getList();
this.uom=new UOM();
this.Clear();
  } 
  
  Delete()
  {
    console.log(this.uom);
//     if(this.uom!=null){
  
//       this.s1.con.invoke("UOM_Delete", this.uom.Id);
//       this.s1.getList();
//       this.uom=new UOM();
  
//     }
//  else
//  {
//    console.log("no data");
//  }
  }
  Clear()
  {
    this.uom=new UOM();
  }
}
