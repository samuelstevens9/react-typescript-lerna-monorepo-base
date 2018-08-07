// src/reducers/index.tsx

import { FetchActions } from '../actions';
import * as ACTION_TYPES from '../constants/index';
import { IStoreState } from '../types/index';


export function loadFromServer(state: IStoreState, action: FetchActions ): IStoreState {
    // console.log("reduce enthusiasm",state,action);
    
    switch (action.type) {
        case ACTION_TYPES.FETCHING:
            return { ...state, fetching: true };
        case ACTION_TYPES.FETCH_ERROR:
            return { ...state, fetching: false, fetch_error: action.error };
        case ACTION_TYPES.FETCHED:
            return { ...state, fetched: true, fetching: false, users: action.payload }
        
    }
    return state;
}