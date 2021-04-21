import { createReducer, on } from '@ngrx/store';
import { ADD_ACTION } from './number-list-actions';

export const initialState: number[] = [];

const _NUMBER_LIST_REDUCER = createReducer(
    initialState,
    on(ADD_ACTION, (state, {num}) => [...state, num] )
);

export const numberListReducer = (state, action) => _NUMBER_LIST_REDUCER(state, action);
