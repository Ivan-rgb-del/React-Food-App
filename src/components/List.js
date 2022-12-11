import React, { useState, Fragment } from 'react';

import data from '../data/data';
import Title from './Title';
import NavBar from './NavBar';
import Card from './Card';

const List = () => {
  const [meals, setMeals] = useState(data);

  return (
    <Fragment>
      <Title />
      <NavBar />
      <Card
        allMeals={meals}
      />
    </Fragment>
  );
};

export default List;