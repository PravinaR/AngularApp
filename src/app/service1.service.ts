import { Injectable } from '@angular/core';
import { SignalR, SignalRConnection } from 'ng2-signalr';
import {Observable,of} from 'rxjs';
import {UOM} from 'src/app/UOM';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  messageList:string[]=[];
  uomList:UOM[]=[];
con:SignalRConnection;
  constructor(private s1:SignalR) { 
    this.con =this.s1.createConnection();
    this.con.status.subscribe(x=>console.log(x));
    this.con.start().then(x=>{console.log(x); 
      this.con.invoke("UserAccount_Login","","a","a","a").then(x=>
        {
          console.log(x);
          this.con.invoke("UOM_List").then(x=>
            {
              console.log(x);
              this.uomList=x;
            }
          );
        });
    this.con.listenFor<string>('message').subscribe(x=>{
                   this.messageList.push(x)
    }); 
  });


  }
  
getList()
{
  this.con.invoke("UOM_List").then(x=>
    {
      console.log(x);
      this.uomList=x;
    }
  );
}

}
