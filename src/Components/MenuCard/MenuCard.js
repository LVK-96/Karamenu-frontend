import React, { useState, useEffect } from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import uuidv4 from 'uuid';
import menuService from '../../Services/menu';
import Course from '../Course';
import './MenuCard.css';

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
      <Card className='menuCardContainer'>
        <Card.Header as='h5'>
          <div>
            <Card.Link href={restaurant.url}>{restaurant.name}</Card.Link>
          </div>
          <div>
            {`${restaurant.opens} - ${restaurant.closes}`}
          </div>
        </Card.Header>
        <ListGroup variant='flush'>
          {menu.courses.map(c => <Course key={uuidv4()} course={c} />)}
        </ListGroup>
      </Card>
    )
  } else {
    return <></>
  }
}

export default MenuCard;
