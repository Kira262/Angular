import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-toast',
  template: `
    <div class="toast" [class.show]="showToast()">
      {{ currentMessage() }}
    </div>
  `,
  styles: [`
    .toast {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #333;
      color: white;
      padding: 15px;
      border-radius: 5px;
      z-index: 1000;
      opacity: 0;
      transition: opacity 0.5s, bottom 0.5s;
    }
    .toast.show {
      opacity: 1;
      bottom: 50px;
    }
  `],
  standalone: true,
})
export class ToastComponent {
  @Input() set message(value: string | null) {
    this.currentMessage.set(value || '');
  }
  @Input() set visible(value: boolean) {
    this.showToast.set(value);
  }

  currentMessage = signal('');
  showToast = signal(false);
}
