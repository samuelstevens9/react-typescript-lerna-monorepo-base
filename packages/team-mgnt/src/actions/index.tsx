import axios from "axios";
// import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as constants from '../constants'
import { IStoreState } from '../types/index';


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



// Hello Actions
export interface IIncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface IDecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IIncrementEnthusiasm | IDecrementEnthusiasm;

export function incrementEnthusiasm(): IIncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): IDecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}

// Login Actions

export interface ISetEmail {
    type: constants.SET_EMAIL;
    email: string;
}

export interface ISetPassword {
    type: constants.SET_PASSWORD;
    password: string;
}

export type TeamAction = ISetEmail | ISetPassword;

export function setEmail(email:string): ISetEmail {
    return {
        email,
        type: constants.SET_EMAIL,
    }
}

export function setPassword(password:string): ISetPassword {
    return {
        password,
        type: constants.SET_PASSWORD,
    }
}