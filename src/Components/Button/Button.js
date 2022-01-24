import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ button_text, openGrades }) => {
  return (
    <button className="my-button" onClick={openGrades}>
      {button_text}
    </button>
  );
};

Button.propTypes = {
  button_text: PropTypes.string,
  openGrades: PropTypes.func,
};

export default Button;
