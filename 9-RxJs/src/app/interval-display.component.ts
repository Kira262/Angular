import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interval-display',
  standalone: true,
  template: `<p>Seconds elapsed: <strong>{{ interval }}</strong></p>`,
})
export class IntervalDisplayComponent {
  // Receives the interval value from parent
  @Input() interval: number = 0;
}
