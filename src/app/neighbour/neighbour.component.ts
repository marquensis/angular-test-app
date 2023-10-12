import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-neighbour',
  templateUrl: './neighbour.component.html',
  styleUrls: ['./neighbour.component.scss']
})
export class NeighbourComponent implements OnInit{

  numSrc: Subject<number>;
  public numValueSecond: number = 0;

  constructor(private shared: SharedService) {
    this.numSrc = this.shared.numSource;

    this.numSrc.subscribe(value => {
      this.numValueSecond = value;
    });
  }

  ngOnInit() {
    
  }

}
