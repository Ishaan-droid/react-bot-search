import { useState, useEffect, useMemo } from 'react';

import Employee from '../../Components/Employee/Employee';
import SearchContainer from '../SearchContainer/SearchContainer';
import fetchData from '../../Service/Api';

import './MainContainer.css';

const MainContainer = () => {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [tag, setTag] = useState({
    tagId: null,
    tagValue: '',
  });
  const [searchTag, setSearchTag] = useState('');

  useEffect(() => {
    fetchData(setData);
  }, []);

  const { students } = data;

  useEffect(() => {
    students && students.map(cur => (cur.tags = []));
  }, [students]);

  useEffect(() => {
    const { tagId, tagValue } = tag;
    const viewTags = students && students.map(cur => cur.id === tagId && cur.tags.push(tagValue));
    setData(prevValue => {
      return {
        ...prevValue,
        viewTags,
      };
    });
  }, [tag, students]);

  const searchNameHandler = e => setSearchName(e.target.value);
  const searchTagHandler = e => setSearchTag(e.target.value);

  const grades = students && students.map(cur => cur.grades);

  // Configuring averages here to reduce time complexity
  const averages = useMemo(
    () =>
      grades &&
      grades.map(
        cur => cur.reduce((acc, individualGrades) => (acc += +individualGrades), 0) / cur.length
      ),
    [grades]
  );

  const addTagHandler = (e, id) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      setTag(prevValue => {
        return {
          ...prevValue,
          tagId: id,
          tagValue: e.target.value,
        };
      });
    }
  };

  // Displaying list of employees
  const displayEmployees =
    students &&
    students
      .filter(cur => {
        const fullName = `${cur.firstName} ${cur.lastName}`;
        if (searchName === '') return cur;
        if (fullName.toLowerCase().includes(searchName)) return cur;
      })
      .filter(cur => {
        const tagStr = cur.tags && cur.tags.join('');
        if (searchTag === '') return cur;
        if (tagStr.includes(searchTag)) return cur;
      })
      .map((cur, idx) => (
        <Employee
          key={cur.id}
          emp_image={cur.pic}
          emp_name={`${cur.firstName} ${cur.lastName}`}
          emp_email={cur.email}
          emp_company={cur.company}
          emp_skill={cur.skill}
          emp_average={averages[idx]}
          emp_grades={grades[idx]}
          addTagWithEnter={e => addTagHandler(e, cur.id)}
          showTags={cur.tags}
        />
      ));

  return (
    <div className="main-container pt-2">
      <SearchContainer
        searchNameQuery={searchName}
        searchNameHandler={searchNameHandler}
        searchTagQuery={searchTag}
        searchTagHandler={searchTagHandler}
      />
      {displayEmployees}
    </div>
  );
};

export default MainContainer;
