import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, setCount } from './counter.actions';

const initialState = 0;

const _CounterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => 0),
  on(setCount, (_, { count }) => count)
);

export function counterReducer(state: number | undefined, action: Action) {
  return _CounterReducer(state, action);
}
