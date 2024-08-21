import { selectCounterState, selectCurrentCount } from './counter.selectors';

describe('Counter Selectors', () => {
  const initialState = 10;  // Example initial state for the tests

  it('should select the counter state', () => {
    const result = selectCounterState.projector(initialState);
    expect(result).toBe(initialState);
  });

  it('should select the current count', () => {
    const result = selectCurrentCount.projector(initialState);
    expect(result).toBe(initialState);
  });
});
