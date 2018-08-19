import axios from "axios";
import { ThunkAction } from 'redux-thunk';
import {getCookie} from 'truthlab-uiux';

import * as constants from '../constants'
import { IStoreState } from '../types/index';

// SETUP AXIOS X-CSRFToken
axios.defaults.headers.common['X-CSRFToken'] = getCookie('csrftoken');

// Load Data From Server Actions
export interface IFetching {
    type: constants.FETCHING;
    stateKey: string;
}
export interface IFetched {
    type: constants.FETCHED;
    payload: Array<{}>;
    stateKey: string;
}
export interface IFetchError {
    type: constants.FETCH_ERROR;
    error: string;
    stateKey: string;
}

export type FetchActions = IFetching | IFetched | IFetchError;

export type ThunkResult<R> = ThunkAction<R, IStoreState, undefined, FetchActions>;
export function fetchData(url:string,stateKey1:string): ThunkResult<void>{
    return (dispatch) => {
        dispatch({ type: constants.FETCHING, stateKey: stateKey1 });

        axios.get(url)
            .then((response:any) => {
                dispatch({ type: constants.FETCHED, stateKey: stateKey1, payload: response.data })
            })
            .catch((err:Error) => {
                dispatch({ type: constants.FETCH_ERROR, stateKey: stateKey1, error: err.message })
            })
    }
}

