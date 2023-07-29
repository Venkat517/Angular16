import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() parentData!: string;
  @Output() myEvent = new EventEmitter<string>();

  constructor() {
    console.log('child component called')
  }

  onClick() {
    this.myEvent.emit('This message is emmited from child componet');
  }


}
