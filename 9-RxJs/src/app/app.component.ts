import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { interval } from 'rxjs';
import { ClickCounterComponent } from './click-counter.component';
import { IntervalDisplayComponent } from './interval-display.component';
import { CustomIntervalComponent } from './custom-interval.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    ClickCounterComponent,
    IntervalDisplayComponent,
    CustomIntervalComponent,
  ],
})
export class AppComponent implements OnInit {
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, { initialValue: 0 });
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = this.interval$.subscribe({});
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
