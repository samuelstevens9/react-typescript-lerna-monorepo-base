// https://github.com/palantir/tslint-react/issues/96
// tslint:disable jsx-no-lambda
import * as React from 'react';

import { LoadingSpinner, TLCard, TLPageHeader } from 'truthlab-uiux';
import { IFetchObject } from '../types';

export interface IProps {
  fetch_error: string;
  fetched: boolean;
  fetching: boolean;
  users: IFetchObject;
  permissions: IFetchObject;
  fetchData: (url:string,stateKey:string) => void;
}

// function Team({ email="", password="", onSetEmail, onSetPassword }: IProps) {
  // console.log('Team',onSetEmail,onSetPassword);
export default class Team extends React.Component<IProps, any> {
  // private readonly state = {
    
  // }
  constructor(props: IProps) {
    super(props);

    
  }
  
  public componentDidMount(){
    // "/api/v1/customer/model/registered_users/"
    this.props.fetchData("/api/v1/customer/model/registered_users/","users");
    // /api/v1/customer/model/permissions/
    this.props.fetchData("/api/v1/customer/model/permissions/", "permissions");
  }

  public render(){
    console.log("this.props.users", this.props.users, "this.props.permissions",this.props.permissions);
    
    return (
      <div className="row">
        <div className="col-sm-12">
          <TLPageHeader title="Team Management" />
          
          <TLCard>
            {this.props.users && !this.props.users.fetching?
              this.props.fetched?
              <div className="table-responsive">
                <table className="table table-xl">
                  <thead>
                    <tr><th>Name</th></tr>
                  </thead>
                  <tbody>
                      {this.props.users && this.props.users.data.map((ru:any,i)=>(
                        <tr key={i}><td>{ru.user.first_name+" "+ru.user.last_name}</td></tr>
                      ))}
                  </tbody>
                </table>
                </div> : this.props.fetch_error : <LoadingSpinner /> }
          </TLCard>

        </div>
      </div>
    );
  }
}

