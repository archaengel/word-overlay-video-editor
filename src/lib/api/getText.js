import axios from 'axios';

export const getText = async (key) => {
  const {
    data: { body },
  } = await axios.get(`http://localhost:9000/words/${key}`);

  return body;
};
