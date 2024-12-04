import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputComponent } from '../../../ui/input/input.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  imports: [ReactiveFormsModule, TranslatePipe, InputComponent],
})
export class FiltersComponent {
  @Input() filtersForm!: FormGroup;
  @Output() search = new EventEmitter<void>();
  @Output() clearFilters = new EventEmitter<void>();
}
