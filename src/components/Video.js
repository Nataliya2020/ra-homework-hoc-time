import DateTime from "./DateTime";
import PropTypes from 'prop-types';

function Video(props) {
  return (
    <div className="video">
      <iframe src={props.url} title="video" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen/>
      <DateTime date={props.date}/>
    </div>
  )
}

Video.propTypes = {
  url: PropTypes.string,
  date: PropTypes.string
}

Video.defaultProps = {
  url: '',
  date: ''
}

export default Video;
