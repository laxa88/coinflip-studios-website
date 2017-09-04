import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bar: 1,
    };
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Hello World {this.props.myVal}</h1>
      </div>);
  }
}

App.defaultProps = {
  myVal: 'walla',
};

App.propTypes = {
  myVal: PropTypes.string.isRequired,
};
