import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';

const Course = ({course}) => {
  return (
    <ListGroup.Item>
      <div>
        {`${course.name_fi} ${course.desc_fi}`}
      </div>
      <div>
        {course.tags}
      </div>
    </ListGroup.Item>
  );
};

export default Course;
