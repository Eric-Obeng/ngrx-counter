import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';

import { counterReducer } from './state/counter.reducer';
import { CounterEffects } from './state/counter.effects';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({counter: counterReducer}),
    provideState({ name: 'counter', reducer: counterReducer }),
    provideEffects([CounterEffects])
  ],
};
