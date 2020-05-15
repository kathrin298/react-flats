import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  return (
    props.flats.map((flat) => {
      return (
        <Flat
          name={flat.name}
          image={flat.imageUrl}
          price={flat.price}
          priceCurrency={flat.priceCurrency}
        />
      );
    })
  );
};

export default FlatList;
