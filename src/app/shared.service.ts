import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class SharedService {
  _num: number = 0;

  _numSource: Subject<number> = new Subject();

  get numSource(): Subject<number> {
    return this._numSource;
  }

  set numSource(src: Subject<number>) {
    this._numSource = src;
  }

  constructor() {}

  changeNum(n: number) {
    this.numSource.next(n);
  }
}