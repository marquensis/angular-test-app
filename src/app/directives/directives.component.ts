import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  block = [
    'яблоко',
    'апельсин',
    '2',
    'огурец',
    'помидор',
    'картошка',
    'капуста',
  ]

  object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  rawDate = new Date();
  date1 = new DatePipe("en-US").transform(this.rawDate, 'dd-MM-yyyy');
}
