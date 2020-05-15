import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  return (
    props.flats.map((flat, index) => {
      return (
        <Flat
          name={flat.name}
          image={flat.imageUrl}
          price={flat.price}
          priceCurrency={flat.priceCurrency}
          lat={flat.lat}
          lng={flat.lng}
          selectFlat={props.selectFlat}
          index={index}
          key={flat.lat}
          selected={props.selectedFlat.name === flat.name}
        />
      );
    })
  );
};

export default FlatList;
