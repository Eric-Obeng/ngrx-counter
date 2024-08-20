import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../state/counter.actions';
import { selectCurrentCount } from '../state/counter.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = this.store.select(selectCurrentCount);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
