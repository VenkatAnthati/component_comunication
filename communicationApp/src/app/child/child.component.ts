import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

 @Input() greetMessage: string = "I am Child";
 message = 'Hello Angular!';
 message1 = 'I am from child to parent communication !';
  constructor() { }

  ngOnInit(): void {
  }

}
