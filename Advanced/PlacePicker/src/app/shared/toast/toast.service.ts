import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastMessage = signal<string | null>(null);
  showToast = signal(false);

  displayToast(message: string) {
    this.toastMessage.set(message);
    this.showToast.set(true);
    setTimeout(() => {
      this.showToast.set(false);
      this.toastMessage.set(null);
    }, 3000); // Hide after 3 seconds
  }
}
