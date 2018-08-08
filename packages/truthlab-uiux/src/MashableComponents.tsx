import * as React from 'react';
import { TLCardProps, TLPageHeaderProps } from '../index';

export class LoadingSpinner extends React.Component<any,any>{
  public render(){
    // <div style={{fontSize:72}}>
    //   <i className="ti-reload rotate-refresh" />
    // </div>
    return(
      <div style={{height:"100px"}}><div className="ball-scale">
        <div />
      </div></div>
    )
  }
}

export class TLCard extends React.Component<TLCardProps, any> {
  public render() {
    return (
      <div className="card">
        {this.props.title ? <div className="card-header">
          <h5>{this.props.title}</h5>
          <span>{this.props.description}</span>
        </div>:""
        }
        <div className="card-block">
        {this.props.children}
        </div>
      </div>
    );
  }
}

export class TLPageHeader extends React.Component<TLPageHeaderProps, any> {
  public render() {
    return(
      <div className="page-header">
        <div className="page-header-title">
          <h4>{this.props.title}</h4>
          <span>{this.props.description}</span>
        </div>
        {/* <div className="page-header-breadcrumb">
          <ul className="breadcrumb-title">
            <li className="breadcrumb-item">
              <a href="index.html">
                <i className="icofont icofont-home" />
              </a>
            </li>
            <li className="breadcrumb-item"><a href="#!">Bootstrap Table</a>
            </li>
            <li className="breadcrumb-item"><a href="#!">Sizing Table</a>
            </li>
          </ul>
        </div> */}
      </div>
    );
  }
}