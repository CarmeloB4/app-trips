import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './ui/button/button.component';
import { InputTextComponent } from './ui/input-text/input-text.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent, InputTextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-trips';
}
