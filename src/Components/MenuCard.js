import React, { useState, useEffect } from 'react';
import menuService from '../Services/menu';
import uuidv4 from 'uuid';
import Course from './Course';

const MenuCard = ({date, restaurant, dummy}) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    console.log("useEffect called");
    const getMenu = async () => {
      try {
        const menu = await menuService.getOne(restaurant, date);
        setMenu(menu);
      } catch (exception) {
        window.alert("Error getting menus");
        console.log(exception);
      }
    }

    getMenu();
  }, [restaurant, date, dummy]);

  if (menu) {
    return (
      <div>
        {restaurant.name}
        {menu.date}
        {menu.courses.map(c => <Course key={uuidv4()} course={c} />)}
      </div>
    )
  } else {
    return <></>
  }
}

export default MenuCard;
