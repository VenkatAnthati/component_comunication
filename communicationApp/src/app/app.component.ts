import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'communicationApp';
  message: string ='I am Parent'
  childMessage =" this message from parent to child communication."

  @ViewChild(ChildComponent) child:any;

  Message: string= "";
  Message1: string= ""
  
  ngAfterViewInit() {
    this.Message = this.child.message;
    this.Message1 = this.child.message1
  }
}
