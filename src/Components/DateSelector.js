import React from 'react';

const DateSelector = ({date, setDate, dummy, setDummy}) => {
  const increment = () => {
    let newDate = date;
    newDate.setDate(newDate.getDate() + 1);
    console.log(newDate);
    setDate(newDate);
    setDummy(!dummy);
  }

  const decrement = () => {
    let newDate = date;
    newDate.setDate(newDate.getDate() - 1);
    console.log(newDate);
    setDate(newDate);
  }

  return (
    <div>
      <button onClick={increment}>
        +
      </button>
      <button onClick={decrement}>
        -
      </button>
    </div>
  );
};

export default DateSelector;
