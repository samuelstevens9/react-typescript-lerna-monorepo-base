// https://github.com/palantir/tslint-react/issues/96
// tslint:disable jsx-no-lambda
import * as React from 'react';
// import { Link } from 'react-router-dom';
import { TLCard, TLPageHeader } from 'truthlab-uiux';

export interface IProps {
  fetch_error: string;
  fetched: boolean;
  fetching: boolean;
  users: Array<{}>;
  fetchData: () => void;
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
    this.props.fetchData();
    
  }

  public render(){
    console.log("fetch_error",this.props.fetch_error);
    
    return (
      <div className="row">
        <div className="col-sm-12">
          <TLPageHeader title="Team Management" />
          
          <TLCard>
            {this.props.fetching?
              <div style={{fontSize:72}}>
                <i className="ti-reload rotate-refresh" />
              </div>:this.props.fetched?
            
              <div className="table-responsive">
                <table className="table table-xl">
                  <thead>
                    <tr><th>Name</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Sam Stevens</td></tr>
                  </tbody>
                </table>
                </div> : this.props.fetch_error }
          </TLCard>

        </div>
      </div>
    );
  }
}

