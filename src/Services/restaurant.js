import axios from 'axios';

const dummyRestaurants = [
  {
    "id": 1,
    "name": "Midpoint",
    "company": "Sodexo",
    "address": "Karakaari 7",
    "opens": "10:30:00",
    "closes": "13:45:00",
    "url": "https://www.sodexo.fi/midpoint"
  },
  {
    "id": 2,
    "name": "Nokia One Espoo",
    "company": "Sodexo",
    "address": "Karaportti 3",
    "opens": "10:30:00",
    "closes": "13:45:00",
    "url": "https://www.sodexo.fi/nokiaone"
  },
  {
    "id": 3,
    "name": "Dreams Cafe",
    "company": "Fazer",
    "address": "Karaportti 4",
    "opens": "11:00:00",
    "closes": "13:30:00",
    "url": "https://www.fazerfoodco.fi/ravintolat/Ravintolat-kaupungeittain/espoo/dreams-cafe/"
  }
];

const baseUrl = `${process.env.REACT_APP_BACKEND_URI}/restaurants`;

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (exception) {
    console.log(exception);
    if (process.env.REACT_APP_DEV) return dummyRestaurants;
    throw exception;
  }
}

const getById= async (restaurantId) => {
  try {
    const response = await axios.get(`${baseUrl}/${restaurantId}`);
    return response.data;
  } catch (exception) {
    console.log(exception);
    throw exception;
  }
}

export default { getAll, getById };
