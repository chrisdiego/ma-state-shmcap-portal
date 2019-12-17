import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo_img from './assets/logo.png';
import './ResilientMAHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'

import QString from 'query-string';
import { withRouter } from 'react-router'

class SearchBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {query: null}
  }

  update_search_text(txt) {
    this.setState({query: txt || ""});
  }

  handle_key_press(target) {
    if(target.key === "Enter") {
      this.do_search();
    }
  }

  submit_search(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    this.do_search();
  }

  clear_query() {
    this.setState({query: ""}, () => {
      this.do_search();
    });
  }

  do_search() {
    let qstring = QString.stringify({query: this.query_string()});
    let path = '/search';
    if (window.location.pathname === '/search/map') {
      path = "/search/map";
    }
    path = `${path}?${qstring}`;
    window.location.href = path;
  }
  query_string() {
    let query_string = null;
    if (this.props.location.pathname.match("/search")) {
      let params = QString.parse(this.props.location.search);
      if (params.query) {
        query_string = params.query;
      }
    }
    if (this.state.query === null) {
      return query_string || "";
    } else {
      return this.state.query;
    }
  }

  render() {
    return (
      <div className={'search-bar ' + this.props.className}>
        <div className={'input-group input-group-' + (this.props.size || 'lg')}>
          <FontAwesomeIcon className='fa fa-search' icon={faSearch} />
          <input value={this.query_string()}
                onChange={(evt) => { this.update_search_text(evt.target.value)}}
                onKeyDown={(evt) => this.handle_key_press(evt)}
                type='text' className='form-control' aria-label="Enter search string for resources and press enter to search"
                placeholder="SEARCH"/>
        </div>
      </div>);
  }
};

const SearchBar = withRouter(SearchBarComponent);

const Logo = (props) =>
  <Link to='/' className='logo'>
    <img className='hidden-sm-down' src={logo_img} alt="logo" />
    <div className='logo-text slate-text'>
      <h1>
        <span className='slate-text'>resilient</span>
        <strong className='orange-text'> MA </strong>
      </h1>
      <small className='tagline slate-text'>
        Climate Change Clearinghouse for the Commonwealth
      </small>
    </div>
  </Link>;

class MegaMenu extends Component {
  render() {
    return <div className='mega-menu no-select'>
        <div className='container'>
          <div className='row' onClick={(e) => this.props.onClick(e)}>
            <header>
              <h1> <Link to='/about'>Supporting the Commonwealth through up-to-date climate change science: </Link></h1>
            </header>
            <nav className='row'>
              <section className='col tool-n-data-col'>
                <h2> Tools & Data</h2>
                <hr/>
                <h3><Link to='/data/documents'>Documents</Link></h3>
                <h3><Link to='/data/data'>Data</Link></h3>
                <h3><Link to='/data/maps'>Maps</Link></h3>
                <h3><Link to='/search'>Resource Clearinghouse</Link></h3>
              </section>
              <section className='col learn-col col-xs-12'>
                <h2>Learn</h2>
                <hr/>
                <div className='row'>
                  <section className='col col-sm-4 no-pad-r'>
                    <h3>Explore Sectors:</h3>
                    <ul>
                      <li><Link to='/sectors/agriculture'>Agriculture</Link></li>
                      <li><Link to='/sectors/coastal-zones'>Coastal Zones</Link></li>
                      <li><Link to='/sectors/economy'>Economy</Link></li>
                      <li><Link to='/sectors/energy'>Energy</Link></li>
                      <li><Link to='/sectors/forestry'>Forestry</Link></li>
                      <li><Link to='/sectors/infrastructure'>Infrastructure</Link></li>
                      <li><Link to='/sectors/local-government'>Local Government</Link></li>
                    </ul>
                  </section>
                  <section className='col col-sm-4 no-pad-r'>
                    <h3>&nbsp;</h3>
                    <ul>
                      <li><Link to='/sectors/natural-resources-habitats'>Natural Resources / Habitats</Link></li>
                      <li><Link to='/sectors/public-health'>Public Health</Link></li>
                      <li><Link to='/sectors/public-safety-emergency-response'>Public Safety / Emergency Response</Link></li>
                      <li><Link to='/sectors/recreation'>Recreation</Link></li>
                      <li><Link to='/sectors/transportation'>Transportation</Link></li>
                      <li><Link to='/sectors/water-resources'>Water Resources</Link></li>
                    </ul>
                  </section>
                  <section className='col col-sm-4 no-pad-r'>
                    <h3>Identify Changes:</h3>
                    <ul>
                      <li><Link to='/changes/sea-level-rise'>Sea Level Rise</Link></li>
                      <li><Link to='/changes/extreme-weather'>Extreme Weather</Link></li>
                      <li><Link to='/changes/changes-in-precipitation'>Changes in Precipitation</Link></li>
                      <li><Link to='/changes/rising-temperatures'>Rising Temperatures</Link></li>
                    </ul>
                  </section>
                </div>
              </section>
              <section className='col take-action-col'>
                <h2>Take Action</h2>
                <hr/>
                <div className='row'>
                  <section className='col col-sm-4 no-pad-r'>
                    <h3>MVP Program:</h3>
                    <ul>
                      <li><Link to='/mvp'>MVP Program Information</Link></li>
                    </ul>
                  </section>
                  <section className='col col-sm-4 no-pad-r'>
                    <h3>State Hazard Mitigation and Climate Adaptation Plan:</h3>
                    <ul>
                      <li><Link to='/shmcap-portal'>Our Plan </Link></li>
                      <li><Link to='/state-action-tracker'>Massachusetts State Action Tracker </Link></li>
                    </ul>
                  </section>
                  <section className='col col-sm-4 no-pad-r'>
                    <h3>Additional Planning Resources:</h3>
                    <ul>
                      <li><Link to='/actions/planning'>Plan Development</Link></li>
                      <li><Link to='/actions/implementation'>Implementation</Link></li>
                      <li><Link to='/actions/outreach-education'>Outreach / Education</Link></li>
                    </ul>
                  </section>
                </div>
              </section>
            </nav>
          </div>
        </div>
      </div>;
  }
}

class MegaMenuToggle extends Component {
  render() {
    return <div onClick={this.props.onclick} className='mega-menu-toggle no-select'>
        <label > Menu </label>
        <FontAwesomeIcon className='fa fa-bars' icon={faBars} />
        {this.props.show_mega_menu ?
          <span className='up-triangle'>
            <span className='triangle'>&nbsp;</span>
          </span>
          : null }
      </div>;
  }
}

class Header extends Component {
  toggle_mega_menu  (evt) {
    evt.stopPropagation();
    evt.preventDefault();
    this.setState({show_mega_menu: !((this.state || {}).show_mega_menu)});
  }

  render() {
    return <div className='header-wrap'>
      <div className='container header'>
        <Logo />
        <div className='controls'>
          <SearchBar className='' size='sm'/>
          <MegaMenuToggle onclick={(evt) => this.toggle_mega_menu(evt)}
            show_mega_menu={(this.state || {}).show_mega_menu} />
        </div>
      </div>
      { (this.state || {}).show_mega_menu ? <MegaMenu onClick={(evt) => this.toggle_mega_menu(evt)}/> : null }
    </div>
  }
}

export default Header;
