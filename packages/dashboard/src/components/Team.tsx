// https://github.com/palantir/tslint-react/issues/96
// tslint:disable jsx-no-lambda
import axios from "axios";
import * as React from 'react';

import { LoadingSpinner, TLCard, TLPageHeader } from 'truthlab-uiux';
import { IFetchObject } from '../types';

export interface IPropsPermissionRow {
  user:any;
}

function PermissionRow({ user }: IPropsPermissionRow) {
  return (
    <tr>
      <td>{user.user.first_name + " " + user.user.last_name}</td>
      <td>{user.user.email}</td>
    </tr>
  );
}


export interface IProps {
  fetch_error: string;
  fetched: boolean;
  fetching: boolean;
  users: IFetchObject;
  fetchData: (url:string,stateKey:string) => void;
}

// function Team({ email="", password="", onSetEmail, onSetPassword }: IProps) {
  // console.log('Team',onSetEmail,onSetPassword);
export default class Team extends React.Component<IProps, any> {
  public readonly state = {
    new_user_email:"",
    new_user_first_name: "",
    new_user_last_name: "",
  }
  constructor(props: IProps) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onCreateUser = this.onCreateUser.bind(this);
  }

  public componentDidMount(){
    // "/api/v1/customer/model/registered_users/"
    this.props.fetchData("/api/v1/customer/model/registered_users/","users");
  }

  public render(){
    return (
      <div className="row">
        <div className="col-sm-12">
          <TLPageHeader title="Team Management" breadcrumbs={[{name:"Team Managment",link:"/c/team/"},]} />

          <TLCard>
            {this.props.users && !this.props.users.fetching?
              this.props.fetched?
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th><th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                      {this.props.users && this.props.users.data.map((ru:any,i)=>(
                        <PermissionRow key={ru.id} user={ru} />
                      ))}
                  </tbody>
                </table>
                  <div className="row">
                    <div className="col"><h6>Add User:</h6></div>
                  </div>
                  <div className="row">
                    <div className="col"><input type="text" className="form-control" placeholder="First Name" name="new_user_first_name" onChange={this.onInputChange} /></div>
                    <div className="col"><input type="text" className="form-control" placeholder="Last Name" name="new_user_last_name" onChange={this.onInputChange} /></div>
                    <div className="col"><input type="text" className="form-control" placeholder="Email" name="new_user_email" onChange={this.onInputChange} /></div>
                    <div className="col">
                      <button type="button" className="btn btn-success btn-sm" onClick={this.onCreateUser}>+ Add</button>
                    </div>
                  </div>
                </div> : this.props.fetch_error : <LoadingSpinner /> }
          </TLCard>

        </div>
      </div>
    );
  }

  // privates
  private onInputChange(event:React.ChangeEvent<HTMLInputElement>):void{
    const name = event.target.name;
    this.setState({ [name]:event.target.value });
  }

  private onCreateUser():void{
    const post_url: string = "/api/v1/customer/team_management/create_user/";
    axios.post(post_url, {
      data: {
        email:this.state.new_user_email,
        first_name: this.state.new_user_first_name,
        last_name:this.state.new_user_last_name,
      }
    }).then((resp) => {
      console.log("onCreateUser resp", resp);
      this.props.fetchData("/api/v1/customer/model/registered_users/", "users");
    }).catch((error) => {
      console.log(error);
    });
  }
}
