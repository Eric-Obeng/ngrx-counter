import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  increment,
  decrement,
  reset,
  setCount,
} from '../state/counter.actions';
import { selectCurrentCount } from '../state/counter.selectors';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  count$: Observable<number>;
  inputCount!: number;

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
    this.inputCount = 0;
  }

  setCount() {
    if (this.inputCount >= 0) {
      this.store.dispatch(reset());
      this.store.dispatch(setCount({ count: this.inputCount }));
    }
  }
}
