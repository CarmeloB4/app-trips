import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-button',
  template: `<button
    [ngClass]="getVariantClass()"
    class="btn"
    [disabled]="disabled"
    (click)="handleClick.emit()"
  >
    {{ text | translate }}
  </button>`,
  imports: [CommonModule, TranslatePipe],
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'accent' = 'primary';
  @Input() disabled = false;
  @Input() text = 'Button';
  @Output() handleClick = new EventEmitter<void>();

  getVariantClass() {
    return {
      'btn-primary': this.variant === 'primary',
      'btn-secondary': this.variant === 'secondary',
      'btn-accent': this.variant === 'accent',
    };
  }
}
