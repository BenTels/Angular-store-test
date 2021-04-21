import { createAction, props } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

export const ADD_ACTION = createAction('[Number List] Add number', props<{num: number}>());
