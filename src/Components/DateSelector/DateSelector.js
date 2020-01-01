import React from 'react';
import './DateSelector.css';

const DateSelector = ({date, setDate, dummy, setDummy}) => {
  const increment = () => {
    let newDate = date;
    newDate.setDate(newDate.getDate() + 1);
    setDate(newDate);
    setDummy(!dummy);
  }

  const decrement = () => {
    let newDate = date;
    newDate.setDate(newDate.getDate() - 1);
    setDate(newDate);
    setDummy(!dummy);
  }

  const dateString = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

  return (
    <div className='dateSelectorContainer'>
      <div className='dateButtons'>
        <button onClick={decrement}>
          -
        </button>
        <button onClick={increment}>
          +
        </button>
      </div>
      <div className='date'>
        {dateString}
      </div>
    </div>
  );
};

export default DateSelector;
