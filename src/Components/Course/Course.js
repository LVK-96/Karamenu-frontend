import React from 'react';

const Course = ({course}) => {
  return (
    <div>
      {course.category}
      {course.name_fi}
      {course.name_en}
      {course.desc_fi}
      {course.desc_en}
      {course.tags}
      {course.price}
    </div>
  );
};

export default Course;
