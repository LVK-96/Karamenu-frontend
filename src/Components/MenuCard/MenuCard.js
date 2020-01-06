import React, { useState, useEffect } from 'react';
import { ListGroup, Card, Spinner } from 'react-bootstrap';
import uuidv4 from 'uuid';
import menuService from '../../Services/menu';
import Course from '../Course';
import './MenuCard.css';

const Header = ({ restaurant }) => {
  if (restaurant) {
    return (
      <Card.Header as='h5'>
        <div>
          <Card.Link href={restaurant.url}>{restaurant.name}</Card.Link>
        </div>
        <div>
          {`${restaurant.opens} - ${restaurant.closes}`}
        </div>
      </Card.Header>
    );
  } else {
    return (
      <Card.Header as='h5'>
        <div>
          Loading...
        </div>
      </Card.Header>
    );
  }
};

const Body = ({ menu }) => {
  if (menu) {
    return (
      <ListGroup variant='flush'>
        {menu.courses.map(c => <Course key={uuidv4()} course={c} />)}
      </ListGroup>
    );
  } else {
    return (
      <Card.Body>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Card.Body>
    );
  }
};

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

    setMenu(null);
    getMenu();
  }, [restaurant, date, dummy]);

  return (
    <Card className='menuCardContainer'>
      <Header restaurant={restaurant} />
      <Body menu={menu} />
    </Card>
  );
}

export default MenuCard;
