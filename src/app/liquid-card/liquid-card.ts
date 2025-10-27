import { Component, input } from '@angular/core';

@Component({
  selector: 'app-liquid-card',
  standalone: false,
  templateUrl: './liquid-card.html',
  styleUrl: './liquid-card.scss',
})
export class LiquidCard {
  public icon = input.required<string>();

  public title = input.required<string>();

  public subtitle = input.required<string>();
}
