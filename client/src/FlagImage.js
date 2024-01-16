import React from 'react';

const FlagImage = ({ country, language}) => {
  return (
    <img
      src={`/flags/${country}.png`} 
      alt={`${country} Flag`}
      width="30"
      height="20"
    />
  );
};

export default FlagImage;