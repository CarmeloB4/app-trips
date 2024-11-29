import { Component, OnInit } from '@angular/core';
import { InputComponent } from '../../../ui/input/input.component';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  imports: [InputComponent],
})
export class FiltersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
