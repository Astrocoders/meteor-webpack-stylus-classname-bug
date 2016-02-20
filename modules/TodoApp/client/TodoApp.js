import { Component, PropTypes, createClass } from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';

export default createClass({
  propTypes: {
    children: PropTypes.any.isRequired
  },

  render() {
    return (
      <div>
        <Helmet
          title="Todo App"
          meta={[
            { name: 'description', content: 'This is a Todo application!' }
          ]}
        />
        {this.props.children}
      </div>
    );
  }
});
