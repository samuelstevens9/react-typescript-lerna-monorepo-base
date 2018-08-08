// src/reducers/index.tsx

import { FetchActions } from '../actions';
import * as ACTION_TYPES from '../constants/index';
import { IStoreState } from '../types/index';


export function loadFromServer(state: IStoreState, action: FetchActions ): IStoreState {
  // console.log("reduce enthusiasm",state,action);
  let fetchObj = {};
  switch (action.type) {
    case ACTION_TYPES.FETCHING:
      fetchObj = { fetching: true,}
      return { ...state, fetching: true, [action.stateKey]: fetchObj };
    case ACTION_TYPES.FETCH_ERROR:
      fetchObj = { fetching: false, fetch_error: action.error }
      return { ...state, fetching: false, [action.stateKey]: fetchObj };
    case ACTION_TYPES.FETCHED:
      fetchObj = {
        data: action.payload, fetched: true, fetching: false, 
      }
      return { ...state, fetched: true, fetching: false, [action.stateKey]: fetchObj }
      
  }
  return state;
}