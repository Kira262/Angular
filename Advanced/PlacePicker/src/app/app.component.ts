import { Component, inject } from '@angular/core';

import { AvailablePlacesComponent } from './places/available-places/available-places.component';
import { UserPlacesComponent } from './places/user-places/user-places.component';
import { ErrorService } from './shared/error.service';
import { ErrorModalComponent } from './shared/modal/error-modal/error-modal.component';
import { ToastComponent } from './shared/toast/toast.component';
import { ToastService } from './shared/toast/toast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    AvailablePlacesComponent,
    UserPlacesComponent,
    ErrorModalComponent,
    ToastComponent,
  ],
})
export class AppComponent {
  private errorService = inject(ErrorService);
  toastService = inject(ToastService);

  error = this.errorService.error;
}
