import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'

import { AppComponent } from './app.component';
import {SignalRModule,SignalRConnection, SignalRConfiguration} from 'ng2-signalr';
import {FormsModule} from '@angular/forms';
import { UOMComponent } from './uom/uom.component'


export function createconfig() : SignalRConfiguration{
const c=new SignalRConfiguration();
c.hubName="abServerHub";
c.url="http://localhost/FMCG";
c.logging=true;

c.executeErrorsInZone=false;
c.executeEventsInZone=true;
c.executeStatusChangeInZone=true; 
return c;
}

const rout:Routes=[
{path:'',component:UOMComponent}
]
  
@NgModule({
  declarations: [
    AppComponent,
    UOMComponent
  ],
  imports: [
    BrowserModule,
    SignalRModule.forRoot(createconfig),
FormsModule,
RouterModule.forRoot(rout)
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
