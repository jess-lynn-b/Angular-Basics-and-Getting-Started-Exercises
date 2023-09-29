import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  data = 0;

  increment (){
    this.data = this.data + 1;
  }

  decrement(){
    this.data = this.data - 1;
  }
}

