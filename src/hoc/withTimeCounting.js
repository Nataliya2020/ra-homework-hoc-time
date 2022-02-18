import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

function withTimeCounting(Component) {

  class TimeCountingComponent extends React.Component {
    render() {
      const {date} = this.props;

      if (date) {
        this.calculatedTime = moment(this.props.date).fromNow();
      }

      return (<Component calculatedTime={this.calculatedTime} {...this.props}/>)
    }
  }

  TimeCountingComponent.propTypes = {
    date: PropTypes.string.isRequired
  }

  TimeCountingComponent.defaultProps = {
    date: ''
  }

  return (TimeCountingComponent);
}

withTimeCounting.PropTypes = {
  Component: PropTypes.func
}

withTimeCounting.defaultProps = {
  Component: () => {
  }
}

export default withTimeCounting;
