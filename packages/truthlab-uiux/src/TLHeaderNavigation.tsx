import * as React from 'react';
import { TLHeaderNavigationProps } from '../index';

export class TLHeaderNavigation extends React.Component<TLHeaderNavigationProps, any> {
  readonly state = {
    vertical_nav_type:"expanded",
  }
  constructor(props: TLHeaderNavigationProps) {
    super(props);
    
    this.toggleCollapseMenu = this.toggleCollapseMenu.bind(this);
  }
  public render() {
    return (
      <div className="pcoded" theme-layout="vertical" vertical-placement="left" vertical-layout="wide" pcoded-device-type="desktop" vertical-nav-type={this.state.vertical_nav_type} vertical-effect="shrink" vnavigation-view="view1">
        <div className="pcoded-container navbar-wrapper">
          <nav className="navbar header-navbar pcoded-header iscollapsed" header-theme="theme1" pcoded-header-position="fixed">
            <div className="navbar-wrapper">
              <div className="navbar-logo" style={{ "padding": "28px"}}>
                <a href="/c"><img className="img-fluid" alt="truthlab logo" width="165" src="https://truthlab-static.s3.amazonaws.com/images/truthlab-logo.svg" /></a>
              </div>
              <div className="navbar-container container-fluid">
                <div>
                  <ul className="nav-left">
                    <li>
                      <div className="sidebar_toggle"><a href="javascript:void(0)" onClick={this.toggleCollapseMenu} ><i className="ti-menu" /></a></div>
                    </li>
                    <li>
                      <a className="main-search morphsearch-search" href="#"><i className="ti-search" /></a>
                    </li>
                  </ul>
                  <ul className="nav-right">
                    <li className="header-notification complete">
                      <a href="#!">
                        <i className="ti-bell" />
                        <span className="badge">5</span>
                      </a>
                      <ul className="show-notification">
                        <li>
                          <h6>Notifications</h6>
                          <label className="label label-danger">New</label>
                        </li>
                      </ul>
                    </li>
                    <li className="user-profile header-notification complete">
                      <a href="#!">
                        <img src="https://s3-us-west-2.amazonaws.com/truthlab-static/images/avatar.svg" alt="User-Profile-Image" />
                        <span>Scott Hutchins</span>
                        <i className="ti-angle-down" />
                      </a>
                      <ul className="show-notification profile-notification">
                        <li>
                          <a href="/c/team"><i className="ti-settings" /> Settings</a>
                        </li>
                        <li>
                          <a href="/c/profile"><i className="ti-user" /> Profile</a>
                        </li>
                        <li>
                          <a href="email-inbox.html"><i className="ti-email" /> My Messages</a>
                        </li>
                        <li>
                          <a href="/c/logout"><i className="ti-layout-sidebar-left" /> Logout</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <div className="pcoded-main-container" style={{ "marginTop": "56px" }}>
            <div className="pcoded-wrapper">
              
              <nav className="pcoded-navbar" data-navbar-theme="themelight1" active-item-theme="theme5" sub-item-theme="theme2" active-item-style="style0" pcoded-navbar-position="fixed" pcoded-header-position="fixed">
                <div className="pcoded-inner-navbar main-menu mCustomScrollbar _mCS_1 mCS-autoHide" id="" style={{ "overflow": "visible" }}>
                  {/* TODO: mCustomScrollBox?? */}
                  <div className="pcoded-navigatio-lavel" data-i18n="nav.category.navigation" menu-title-theme="theme5">Navigation</div>
                  <ul className="pcoded-item pcoded-left-item" item-border="true" item-border-style="none" subitem-border="true">
                    <li className="">
                      <a href="/c/">
                        <span className="pcoded-micon"><i className="ti-home" /></span>
                        <span className="pcoded-mtext" data-i18n="nav.main">Dashboard</span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li className="">
                      <a href="/c/panel">
                        <span className="pcoded-micon"><i className="icon-people" /></span>
                        <span className="pcoded-mtext" data-i18n="nav.panel">Panel</span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li className="">
                      <a href="/c/panel">
                        <span className="pcoded-micon"><i className="icon-folder" /></span>
                        <span className="pcoded-mtext" data-i18n="nav.panel">Projects</span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    {/* <li className="pcoded-hasmenu active pcoded-trigger" dropdown-icon="style1" subitem-icon="style6">
                      <a href="javascript:void(0)">
                        <span className="pcoded-micon"><i className="ti-home" /></span>
                        <span className="pcoded-mtext" data-i18n="nav.dash.main">Dashboard</span>
                        <span className="pcoded-mcaret" />
                      </a>
                      <ul className="pcoded-submenu">
                        <li className="active">
                          <a href="/c/">
                            <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                            <span className="pcoded-mtext" data-i18n="nav.dash.default">Default</span>
                            <span className="pcoded-mcaret" />
                          </a>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
              </nav>

              <div className="pcoded-content">
                <div className="pcoded-inner-content">
                  <div className="main-body">
                    <div className="page-wrapper">
                    {this.props.children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

  private toggleCollapseMenu(){
    // vertical-nav-type="expanded"
    const vertical_nav_type = this.state.vertical_nav_type == "expanded"?"collapsed":"expanded";
    this.setState({ vertical_nav_type });
  }
}
