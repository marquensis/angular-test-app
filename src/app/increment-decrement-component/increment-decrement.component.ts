import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-increment-decrement',
  templateUrl: './increment-decrement.component.html',
  styleUrls: ['./increment-decrement.component.scss']
})
export class IncrementDecrementComponent {
  numSrc: Subject<number>;
  num:number = 1;

  constructor(private shared: SharedService) { 
    this.numSrc = this.shared.numSource;
  }

  incItem() {
    console.log("++");
    this.shared.changeNum(this.num++);
  }
  decItem() {
    console.log("--");
    this.shared.changeNum(this.num--);
  }
}
