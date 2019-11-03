import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_BACKEND_URI}/restaurants`;

const getOne = async (restaurant, date) => {
  try {
    const url = `${baseUrl}/${restaurant.id}/${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const response = await axios.get(url);
    return response.data;
  } catch (exception) {
    console.log(exception);
    return null;
  }
}

export default { getOne };
