import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_BACKEND_URI}/restaurants`;

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (exception) {
    console.log(exception);
    return null;
  }
}

const getOne = async (restaurant) => {
  try {
    const response = await axios.get(`${baseUrl}/${restaurant.id}`);
    return response.data;
  } catch (exception) {
    console.log(exception);
    return null;
  }
}

export default { getAll, getOne };
