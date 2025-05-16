import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  standalone: true,
  template: `
    <button (click)="onClick()">Click me</button>
    <p>You have clicked <strong>{{ clickCount() }}</strong> times.</p>
  `,
})
export class ClickCounterComponent {
  // Holds the current click count
  clickCount = signal(0);

  // Increments the click count
  onClick() {
    this.clickCount.update((prev) => prev + 1);
  }
}
