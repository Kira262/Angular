import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';

import { Place } from '../place.model'; // Renamed import
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesService } from '../places.service';
import { ToastService } from '../../shared/toast/toast.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');
  private placesService = inject(PlacesService);
  private toastService = inject(ToastService);
  private destroyRef = inject(DestroyRef);

  // constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.isFetching.set(true);
    const subscription = this.placesService.loadAvailablePlaces().subscribe({
      next: (places) => {
        this.places.set(places);
      },
      error: (error: Error) => {
        this.error.set(error.message);
      },
      complete: () => {
        this.isFetching.set(false);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onSelectPlace(selectedPlace: Place) {
    this.places.update((prevPlaces) =>
      prevPlaces?.map((p) =>
        p.id === selectedPlace.id ? { ...p, justAdded: true } : p
      )
    );
    setTimeout(() => {
      this.places.update((prevPlaces) =>
        prevPlaces?.map((p) =>
          p.id === selectedPlace.id ? { ...p, justAdded: false } : p
        )
      );
    }, 1000); // Reset after 1 second
    const subscription = this.placesService
      .addPlaceToUserPlaces(selectedPlace)
      .subscribe({
        next: (resData) => {
          console.log(resData);
          this.toastService.displayToast(
            `${selectedPlace.title} added to your favorites!`
          );
        },
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
