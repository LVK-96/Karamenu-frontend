import React, { useState, useEffect } from 'react';
import './MainView.css';
import restaurantService from '../../Services/restaurant';
import MenuCard from '../MenuCard';
import DateSelector from '../DateSelector';

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
      <div className='menuCards'>
        {restaurants.map(r => <MenuCard key={r.id} date={date} restaurant={r} dummy={dummy} />)}
      </div>
    </div>
  );
};

export default MainView;
