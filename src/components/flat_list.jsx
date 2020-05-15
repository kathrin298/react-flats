import React from 'react';
import Flat from './flat';

const FlatList = ({ flats, selectFlat, selectedFlat }) => {
  return (
    flats.map((flat, index) => {
      return (
        <Flat
          name={flat.name}
          image={flat.imageUrl}
          price={flat.price}
          priceCurrency={flat.priceCurrency}
          lat={flat.lat}
          lng={flat.lng}
          selectFlat={selectFlat}
          index={index}
          key={flat.lat}
          selected={selectedFlat.name === flat.name}
        />
      );
    })
  );
};

export default FlatList;
