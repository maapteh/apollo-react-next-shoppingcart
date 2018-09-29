import React from 'react';
import './price.scss';

export const Price = ({price}) => {
  const displayPrice = price.toFixed(2);
  const displayPriceSplit = displayPrice.split('.');

  return (
    <div className="price">
      <span className="price__integer">{displayPriceSplit[0]}</span>
      <span className="price__dot">.</span>
      <span className="price__fractional">{displayPriceSplit[1]}</span>
    </div>
  );
};
