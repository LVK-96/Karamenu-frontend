import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import './MainView.css';
import restaurantService from '../../Services/restaurant';
import MenuCard from '../MenuCard';
import DateSelector from '../DateSelector';

const MenuCards = ({ restaurants, date, dummy }) => {
  if (restaurants.length > 0) {
    return (
      <div className='menuCards'>
        {restaurants.map(r => <MenuCard key={r.id} date={date} restaurant={r} dummy={dummy} />)}
      </div>
    );
  } else {
      return (
        <Spinner animation="grow" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
  }
}

const MainView = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [date, setDate] = useState(new Date());
  const [dummy, setDummy] = useState(false); // Changed date doesn't re-render App for some reason

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const restaurants = await restaurantService.getAll();
        setRestaurants(restaurants);
      } catch (exception) {
        window.alert("Connection to backend failed");
        console.log(exception);
      }
    }

    getRestaurants();
  }, []);

  return (
    <div className='container'>
      <div className='dateSelector'>
        <DateSelector date={date} setDate={setDate} dummy={dummy} setDummy={setDummy} />
      </div>
      <MenuCards restaurants={restaurants} date={date} dummy={dummy} />
    </div>
  );
};

export default MainView;
