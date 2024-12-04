import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `<label class="input input-bordered flex items-center gap-2">
    <input
      [type]="type"
      class="grow"
      [placeholder]="placeholder"
      [formControl]="control"
    />
    @if (type === 'text') {
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="h-4 w-4 opacity-70"
      >
        <path
          fill-rule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clip-rule="evenodd"
        />
      </svg>
    } @else if (type === 'number') {
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 120"
        class="h-4 w-4 opacity-70"
      >
        <path
          d="M80 35
           C80 22, 65 10, 45 10
           C25 10, 10 25, 10 50
           C10 75, 25 90, 45 90
           C65 90, 80 78, 80 65"
          fill="none"
          stroke="black"
          stroke-width="8"
          stroke-linecap="round"
        />
        <line x1="5" y1="45" x2="70" y2="45" stroke="black" stroke-width="8" />
        <line x1="5" y1="55" x2="70" y2="55" stroke="black" stroke-width="8" />
      </svg>
    }
  </label>`,
  imports: [ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: 'text' | 'date' | 'number' = 'text';
  @Input() placeholder = 'Search';
  control: FormControl = new FormControl();

  writeValue(value: string | null): void {
    this.control.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.control.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: () => void): void {
    this.control.registerOnChange(fn);
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }
}
