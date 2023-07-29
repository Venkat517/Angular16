import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
onClick() {
throw new Error('Method not implemented.');
}

  @Input() sampleData!: string

  constructor() {
    console.log('called constructor');
  }
  
  ngOnInit(): void {
    
  }

}
