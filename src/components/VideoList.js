import Video from "./Video";
import PropTypes from 'prop-types';

function VideoList(props) {
  return props.list.map(item => <Video url={item.url} date={item.date} key={item.id}/>);
}

VideoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.string
  })),
}

VideoList.defaultProps = {
  list: PropTypes.arrayOf(PropTypes.shape({
    url: '',
    date: '',
    id: ''
  }))
}

export default VideoList;
