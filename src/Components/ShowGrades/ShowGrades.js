import PropTypes from 'prop-types';

const ShowGrades = ({ grades }) => {
  return (
    <div className="mt-3 mb-3">
      {grades.map((cur, idx) => (
        <p key={idx}>
          {`Test${idx + 1}:`} <span className="ps-4">{cur}%</span>
        </p>
      ))}
    </div>
  );
};

ShowGrades.propTypes = {
  grades: PropTypes.array,
};

export default ShowGrades;
