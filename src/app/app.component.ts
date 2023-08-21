import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HospitalManagementSystem';
  someValue:string="";
  someValues:Array<string>=new Array<string>();
  handleClick(){
    this.someValues.push(this.someValue);
    this.someValue="";
  }
}
