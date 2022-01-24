import PropTypes from 'prop-types';

import './ShowTags.css';

const ShowTags = ({ tags }) => {
  return <div className="tags">{tags && tags.map((cur, idx) => <p key={idx}>{cur}</p>)}</div>;
};

ShowTags.propTypes = {
  tags: PropTypes.array,
};

export default ShowTags;
