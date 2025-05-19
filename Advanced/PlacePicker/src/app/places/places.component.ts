import { Component, input, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

import { Place } from './place.model'; // Corrected import

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [],
  templateUrl: './places.component.html',
  styleUrl: './places.component.css',
  animations: [
    trigger('list', [
      transition(':enter', [
        query('li', [
          style({ opacity: 0, transform: 'translateY(-100px)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ]),
      transition(':leave', [
        query('li', [
          animate('500ms ease-in', style({ opacity: 0, transform: 'translateY(-100px)' }))
        ], { optional: true })
      ])
    ])
  ]
})
export class PlacesComponent {
  places = input.required<Place[]>();
  selectPlace = output<Place>();

  onSelectPlace(place: Place) {
    this.selectPlace.emit(place);
  }
}
