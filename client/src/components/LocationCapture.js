import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LocationCapture = ({ setLocation }) => {
  const location = useLocation();

  useEffect(() => {
    setLocation(location);
  }, [location, setLocation]);

  return null;
};

export default LocationCapture;