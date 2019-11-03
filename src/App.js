import React, {useEffect, useState} from 'react';
import restaurantService from './Services/restaurant';
import MenuCard from './Components/MenuCard';
import DateSelector from './Components/DateSelector';

const App = () => {
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
  }, [setRestaurants]);

  return (
    <div>
      <DateSelector date={date} setDate={setDate} dummy={dummy} setDummy={setDummy} />
      {restaurants.map(r => <MenuCard key={r.name} date={date} restaurant={r} dummy={dummy} />)}
    </div>
  );
}

export default App;
