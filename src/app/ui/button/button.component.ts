import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button
    [ngClass]="getVariantClass()"
    class="btn"
    [disabled]="disabled"
    (click)="onClick.emit()"
  >
    {{ text }}
  </button>`,
  imports: [CommonModule],
})
export class ButtonComponent implements OnInit {
  @Input() variant: 'primary' | 'secondary' | 'accent' = 'primary';
  @Input() disabled = false;
  @Input() text = 'Button';
  @Output() onClick = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  getVariantClass() {
    return {
      'btn-primary': this.variant === 'primary',
      'btn-secondary': this.variant === 'secondary',
      'btn-accent': this.variant === 'accent',
    };
  }
}