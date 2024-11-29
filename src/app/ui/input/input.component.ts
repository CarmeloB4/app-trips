import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `<label class="input input-bordered flex items-center gap-2">
    <input [type]="type" class="grow" [placeholder]="placeholder" />
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
    }
  </label>`,
  styles: [
    `
      label:focus {
        outline: none;
      }
    `,
  ],
})
export class InputComponent implements OnInit {
  @Input() type: 'text' | 'date' | 'number' = 'text';
  @Input() placeholder = 'Search';
  @Input() control: FormControl = new FormControl<string | null>(null);
  constructor() {}

  ngOnInit() {}
}