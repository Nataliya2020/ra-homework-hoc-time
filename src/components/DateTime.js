import withTimeCounting from "../hoc/withTimeCounting";
import PropTypes from 'prop-types';

function DateTime(props) {
  return (
    <p className="date">{props.calculatedTime}</p>
  )
}

const WrappedComponent = withTimeCounting(DateTime)

DateTime.propTypes = {
  calculatedTime: PropTypes.string,
}

DateTime.defaultProps = {
  calculatedTime: ''
}

export default WrappedComponent;
