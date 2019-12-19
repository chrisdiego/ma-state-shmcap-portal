import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../sass/ClearinghouseCollection.scss';

const API_HOST = 'https://d2iq7uivdprspu.cloudfront.net'

class ClearinghouseCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {collection_result: {}}
  }

  componentWillMount() {
    let sthis = this;
    if (this.props.collection_name) {
      fetch(`${API_HOST}/collections/by-name/${this.props.collection_name}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to retrieve collection");
          }
        })
        .then((json) => {
          sthis.setState({collection_result: json, requesting: false, error: false});
        })
        .catch((e) => {
          console.warn(e);
        });
    }
  }

  render() {
    let resources = this.props.resources || this.state.collection_result.resources || [{}, {},{}];
    return (
      <div className='clearinghouse-collection'>
      {this.props.title ? <h5 className='text-secondary font-weight-bold my-4'>
          <a id={this.props.id}>
            {this.props.title}
          </a>
        </h5> : null}
        <ul>
          {resources.map((res, i) => {
            let href = `/resources/${res.docid}`;
            let img = <img alt='showcased resource' src={res.image}/>;
            let label = <label>{res.title}</label>;

            return <li className='resource' key={i}>
                <a className='img-link'href={href} target="_blank"> {img}</a>
                <a className='label-link'href={href} target="_blank"> {label}</a>

            </li>
          })}
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ClearinghouseCollection;
