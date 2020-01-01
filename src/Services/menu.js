import axios from 'axios';

const dummyMenu = {
  "date": "2020-01-03",
  "courses": [
    {
      "category": "",
      "name_fi": "Punajuurisosekeittoa",
      "name_en": "",
      "desc_fi": "",
      "desc_en": "",
      "tags": "* ,A ,G ,L",
      "price": ""
    },
    {
      "category": "",
      "name_fi": "Mantelia",
      "name_en": "",
      "desc_fi": "",
      "desc_en": "",
      "tags": "A ,G ,L ,M ,Veg",
      "price": ""
    },
    {
      "category": "",
      "name_fi": "Kasvisbolognesea",
      "name_en": "",
      "desc_fi": "",
      "desc_en": "",
      "tags": "* ,A ,G ,L ,M ,Veg ,VS",
      "price": ""
    },
    {
      "category": "",
      "name_fi": "Spagettia",
      "name_en": "",
      "desc_fi": "",
      "desc_en": "",
      "tags": "A ,L ,M ,Veg",
      "price": ""
    },
    {
      "category": "",
      "name_fi": "Vegaanista juustoraastetta",
      "name_en": "",
      "desc_fi": "",
      "desc_en": "",
      "tags": "G ,L ,M ,Veg",
      "price": ""
    },
    {
      "category": "",
      "name_fi": "Uunikirjolohta",
      "name_en": "",
      "desc_fi": "",
      "desc_en": "",
      "tags": "* ,A ,G ,L ,M",
      "price": ""
    },
    {
      "category": "",
      "name_fi": "Kermaperunoita",
      "name_en": "",
      "desc_fi": "",
      "desc_en": "",
      "tags": "A ,G ,L",
      "price": ""
    },
    {
      "category": "",
      "name_fi": "Höyrytettyä parsakaalia",
      "name_en": "",
      "desc_fi": "",
      "desc_en": "",
      "tags": "* ,G ,L ,M ,Veg",
      "price": ""
    }
  ]
};

const baseUrl = `${process.env.REACT_APP_BACKEND_URI}/restaurants`;

const getByIdAndDate= async (restaurantId, date) => {
  try {
    const url = `${baseUrl}/${restaurantId}/${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const response = await axios.get(url);
    return response.data;
  } catch (exception) {
    console.log(exception);
    if (process.env.REACT_APP_DEV) return dummyMenu;
    throw exception;
  }
}

export default { getByIdAndDate };
