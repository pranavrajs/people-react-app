import React from 'react';

import Card from '.';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';

export default {
  title: 'Remote/Card',
  component: Card,
};

const Template = (args) => {
  const { children, ...restArgs } = args
  return (
    <Card {...restArgs}>
      {children}
    </Card>
  );
}

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  className: 'table--card',
  children: 'This is a card',
}

export const CardWithHeaderAndFooter = () => {
  return (
    <Card>
      <CardHeader title="Add a new employee" subtitle="Fill out the information of your new employee." />
      <CardContent>
        Content for Card
      </CardContent>
      <CardFooter>
        Content for footer
      </CardFooter>
    </Card>
  )
}
