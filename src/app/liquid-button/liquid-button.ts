import { Component, input } from '@angular/core';

@Component({
  selector: 'app-liquid-button',
  standalone: false,
  templateUrl: './liquid-button.html',
  styleUrl: './liquid-button.scss',
})
export class LiquidButton {
  public text = input.required<string>();
}
