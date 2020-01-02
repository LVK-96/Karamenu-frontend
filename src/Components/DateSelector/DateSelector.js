import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
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
    <ButtonGroup>
      <Button onClick={decrement}>{'<'}</Button>
      <Button disabled={true}>{dateString} Keskiviikko</Button>
      <Button onClick={increment}>{'>'}</Button>
    </ButtonGroup>
  );
};

export default DateSelector;
