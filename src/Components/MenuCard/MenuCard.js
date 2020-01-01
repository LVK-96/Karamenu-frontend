import React, { useState, useEffect } from 'react';
import menuService from '../../Services/menu';
import uuidv4 from 'uuid';
import Course from '../Course';

const MenuCard = ({date, restaurant, dummy}) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const getMenu = async () => {
      try {
        // TODO: Backend should return id as string
        const menu = await menuService.getByIdAndDate(restaurant.id.toString(), date);
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
        {date.toString()}
        {menu.courses.map(c => <Course key={uuidv4()} course={c} />)}
      </div>
    )
  } else {
    return <></>
  }
}

export default MenuCard;
