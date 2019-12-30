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
  <a href='/' className='logo'>
    <img className='hidden-sm-down' src={logo_img} alt="logo" />
    <div className='logo-text slate-text'>
      <h1>
        <span className='slate-text'>resilient</span>
        <strong className='orange-text'> MA </strong>
      </h1>
      <small className='tagline slate-text text-nowrap'>
        Climate Change Clearinghouse for the Commonwealth
      </small>
    </div>
  </a>;

class MegaMenu extends Component {
  render() {
    return <div className='mega-menu no-select'>
        <div className='container'>
          <div className='row' onClick={(e) => this.props.onClick(e)}>
            <header>
              <h1> <a href='/about' onClick={(e) => window.location.href = "/about"}>Supporting the Commonwealth through up-to-date climate change science: </a></h1>
            </header>
            <nav className='row w-100'>
              <section className='col tool-n-data-col'>
                <h2> Tools & Data</h2>
                <hr/>
                <h3><a href='/data/documents' onClick={(e) => window.location.href = e.target['href']}>Documents</a></h3>
                <h3><a href='/data/data' onClick={(e) => window.location.href = e.target['href']}>Data</a></h3>
                <h3><a href='/data/maps' onClick={(e) => window.location.href = e.target['href']}>Maps</a></h3>
                <h3><a href='/search' onClick={(e) => window.location.href = e.target['href']}>Resource Clearinghouse</a></h3>
              </section>
              <section className='col learn-col col-xs-12'>
                <h2>Learn</h2>
                <hr/>
                <div className='row'>
                  <section className='col col-sm-4 no-pad-r'>
                    <h3>Explore Sectors:</h3>
                    <ul style={{paddingLeft: "8px"}}>
                      <li><a href='/sectors/agriculture' onClick={(e) => window.location.href = e.target['href']}>Agriculture</a></li>
                      <li><a href='/sectors/coastal-zones' onClick={(e) => window.location.href = e.target['href']}>Coastal Zones</a></li>
                      <li><a href='/sectors/economy' onClick={(e) => window.location.href = e.target['href']}>Economy</a></li>
                      <li><a href='/sectors/energy' onClick={(e) => window.location.href = e.target['href']}>Energy</a></li>
                      <li><a href='/sectors/forestry' onClick={(e) => window.location.href = e.target['href']}>Forestry</a></li>
                      <li><a href='/sectors/infrastructure' onClick={(e) => window.location.href = e.target['href']}>Infrastructure</a></li>
                      <li><a href='/sectors/local-government' onClick={(e) => window.location.href = e.target['href']}>Local Government</a></li>
                    </ul>
                  </section>
                  <section className='col col-sm-4 no-pad-r'>
                    <h3>&nbsp;</h3>
                    <ul style={{paddingLeft: "8px"}}>
                      <li><a href='/sectors/natural-resources-habitats' onClick={(e) => window.location.href = e.target['href']}>Natural Resources / Habitats</a></li>
                      <li><a href='/sectors/public-health' onClick={(e) => window.location.href = e.target['href']}>Public Health</a></li>
                      <li><a href='/sectors/public-safety-emergency-response' onClick={(e) => window.location.href = e.target['href']}>Public Safety / Emergency Response</a></li>
                      <li><a href='/sectors/recreation' onClick={(e) => window.location.href = e.target['href']}>Recreation</a></li>
                      <li><a href='/sectors/transportation' onClick={(e) => window.location.href = e.target['href']}>Transportation</a></li>
                      <li><a href='/sectors/water-resources' onClick={(e) => window.location.href = e.target['href']}>Water Resources</a></li>
                    </ul>
                  </section>
                  <section className='col col-sm-4 no-pad-r'>
                    <h3>Identify Changes:</h3>
                    <ul style={{paddingLeft: "8px"}}>
                      <li><a href='/changes/sea-level-rise' onClick={(e) => window.location.href = e.target['href']}>Sea Level Rise</a></li>
                      <li><a href='/changes/extreme-weather' onClick={(e) => window.location.href = e.target['href']}>Extreme Weather</a></li>
                      <li><a href='/changes/changes-in-precipitation' onClick={(e) => window.location.href = e.target['href']}>Changes in Precipitation</a></li>
                      <li><a href='/changes/rising-temperatures' onClick={(e) => window.location.href = e.target['href']}>Rising Temperatures</a></li>
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
                    <ul style={{paddingLeft: "8px"}}>
                      <li><a href='/mvp' onClick={(e) => window.location.href = e.target['href']}>MVP Program Information</a></li>
                    </ul>
                  </section>
                  <section className='col col-sm-4 no-pad-r'>
                    <h3>State Hazard Mitigation and Climate Adaptation Plan:</h3>
                    <ul style={{paddingLeft: "8px"}}>
                      <li><Link to='/'>Our Plan </Link></li>
                      <li><Link to='/action-tracker'>Massachusetts State Action Tracker </Link></li>
                    </ul>
                  </section>
                  <section className='col col-sm-4 no-pad-r'>
                    <h3>Additional Planning Resources:</h3>
                    <ul style={{paddingLeft: "8px"}}>
                      <li><a href='/actions/planning' onClick={(e) => window.location.href = e.target['href']}>Plan Development</a></li>
                      <li><a href='/actions/implementation' onClick={(e) => window.location.href = e.target['href']}>Implementation</a></li>
                      <li><a href='/actions/outreach-education' onClick={(e) => window.location.href = e.target['href']}>Outreach / Education</a></li>
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
      <div className='px-5 header'>
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
