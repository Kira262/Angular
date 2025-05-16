import { Component, inject, DestroyRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-custom-interval',
  standalone: true,
  imports: [NgIf],
  template: `
    <div *ngIf="started">
      <ng-container *ngIf="!completed; else completedBlock">
        <p>Custom interval message: <strong>{{ message }}</strong></p>
      </ng-container>
      <ng-template #completedBlock>
        <p style="color: #90ee90;">Custom interval completed!</p>
      </ng-template>
      <p>Interval duration: <strong>{{ intervalDuration / 1000 }}</strong> seconds</p>
      <p>Total time elapsed: <strong>{{ elapsed / 1000 }}</strong> seconds</p>
    </div>
  `,
})
export class CustomIntervalComponent {
  message = '';
  completed = false;
  started = true;
  intervalDuration = 2000; // ms
  elapsed = 0; // ms
  private destroyRef = inject(DestroyRef);
  private subscription: any;

  // Emits a new value every 2 seconds, completes after 4 emissions
  customInterval$ = new Observable<{ message: string }>((subscriber) => {
    let timesExecuted = 0;
    const interval = setInterval(() => {
      if (timesExecuted > 3) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      subscriber.next({ message: `New value #${timesExecuted + 1}` });
      timesExecuted++;
    }, this.intervalDuration);
  });

  constructor() {
    const start = Date.now();
    this.subscription = this.customInterval$.subscribe({
      next: (val) => {
        this.message = val.message;
        this.elapsed = Date.now() - start;
      },
      complete: () => {
        this.completed = true;
        this.elapsed = Date.now() - start;
      },
      error: (err) => {
        this.message = 'Error: ' + err;
      },
    });
    this.destroyRef.onDestroy(() => this.subscription.unsubscribe());
  }
}
