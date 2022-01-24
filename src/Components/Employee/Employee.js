import { useState } from 'react';

import './Employee.css';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import ShowGrades from '../ShowGrades/ShowGrades';
import SearchInput from '../SearchInput/SearchInput';
import ShowTags from '../ShowTags/ShowTags';

const Employee = ({
  emp_image,
  emp_name,
  emp_email,
  emp_company,
  emp_skill,
  emp_average,
  emp_grades,
  onChangeHandler,
  addTagWithEnter,
  showTags,
}) => {
  const [showGrades, setShowGrades] = useState(true);
  const openGradesHandler = () => setShowGrades(prevValue => !prevValue);

  return (
    <div className="employee">
      <Row>
        <Col lg={3} className="d-flex justify-content-center align-items-start">
          <img src={emp_image} alt="employee_img" />
        </Col>
        <Col lg={8} className="d-flex align-items-start flex-column justify-content-center">
          <h1>
            <strong>{emp_name}</strong>
          </h1>
          <p>Email : {emp_email} </p>
          <p>Company : {emp_company} </p>
          <p>Skill : {emp_skill} </p>
          <p>Average : {emp_average}% </p>
          {!showGrades && <ShowGrades grades={emp_grades} />}
          {<ShowTags tags={showTags} />}
          <SearchInput
            search_word="Add a tag"
            searchEmployeeHandler={onChangeHandler}
            search_name="addTag"
            addTagWithEnter={addTagWithEnter}
          />
        </Col>
        <Col lg={1}>
          <Button openGrades={openGradesHandler} button_text={showGrades ? '+' : '-'} />
        </Col>
      </Row>
    </div>
  );
};

Employee.propTypes = {
  emp_name: PropTypes.string,
  emp_email: PropTypes.string,
  emp_company: PropTypes.string,
  emp_skill: PropTypes.string,
  emp_average: PropTypes.number,
  emp_grades: PropTypes.array,
  onChangeHandler: PropTypes.func,
  addTagWithEnter: PropTypes.func,
  showTags: PropTypes.array,
};

export default Employee;
