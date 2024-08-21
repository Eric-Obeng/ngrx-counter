import { counterReducer } from './counter.reducer';
import * as fromActions from './counter.actions';

describe('Counter Reducer', () => {
  const initialState = 0;

  it('should return the initial state', () => {
    const action = {} as any;
    const state = counterReducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should increment the count', () => {
    const action = fromActions.increment();
    const state = counterReducer(initialState, action);
    expect(state).toBe(initialState + 1);
  });

  it('should decrement the count', () => {
    const action = fromActions.decrement();
    const state = counterReducer(initialState, action);
    expect(state).toBe(initialState - 1);
  });

  it('should reset the count', () => {
    const action = fromActions.reset();
    const state = counterReducer(initialState, action);
    expect(state).toBe(0);
  });

  it('should set the count to a specific value', () => {
    const count = 10;
    const action = fromActions.setCount({ count });
    const state = counterReducer(initialState, action);
    expect(state).toBe(count);
  });
});
