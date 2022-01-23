import "./Button.css";

const Button = ({ button_text, openGrades }) => {
  return (
    <button className="my-button" onClick={openGrades}>
      {button_text}
    </button>
  );
};

export default Button;
