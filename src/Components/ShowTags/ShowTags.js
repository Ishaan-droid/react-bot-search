import './ShowTags.css';

const ShowTags = ({ tags }) => {
  return <div className="tags">{tags && tags.map((cur, idx) => <p key={idx}>{cur}</p>)}</div>;
};

export default ShowTags;
