import axios from 'axios';

const HATCHWAY_URL = 'https://api.hatchways.io/assessment/students';

const fetchData = setData => {
  axios
    .get(HATCHWAY_URL)
    .then(res => setData(res.data))
    .catch(err => console.log(err.message));
};

export default fetchData;
