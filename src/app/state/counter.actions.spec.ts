import * as fromCounter from './counter.actions';

describe('Counter Actions', () => {
  it('should create an increment action', () => {
    const action = fromCounter.increment();
    expect(action.type).toEqual('[Counter] Increment');
  });

  it('should create a decrement action', () => {
    const action = fromCounter.decrement();
    expect(action.type).toEqual('[Counter] Decrement');
  });

  it('should create a reset action', () => {
    const action = fromCounter.reset();
    expect(action.type).toEqual('[Counter] Reset');
  });

  it('should create a setCount action with a count value', () => {
    const count = 5;
    const action = fromCounter.setCount({ count });
    expect(action.type).toEqual('[Counter] Set');
    expect(action.count).toEqual(count);
  });
});
