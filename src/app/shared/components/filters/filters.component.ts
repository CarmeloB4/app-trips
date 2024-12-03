import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputComponent } from '../../../ui/input/input.component';
import { Form, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  imports: [ReactiveFormsModule, TranslatePipe, InputComponent],
})
export class FiltersComponent implements OnInit {
  @Input() filtersForm!: FormGroup;
  @Output() search = new EventEmitter<void>();
  @Output() clearFilters = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}
}
