import { connect } from 'react-redux';
// import { Dispatch, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import * as actions from '../actions/';
import Team from '../components/Team';
import { IStoreState } from '../types/index';

export function mapStateToProps({ fetch_error, fetched, fetching, users }: IStoreState) {
    return {
        fetch_error, fetched, fetching, users, 
    }
}

export function mapDispatchToProps(dispatch: ThunkDispatch<IStoreState,void,actions.FetchActions>) {
    return {
        fetchData: (url: string, stateKey: string) => dispatch(actions.fetchData(url,stateKey)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Team);