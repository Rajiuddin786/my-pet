'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";

const LocateShopButton = () => {
  const [loading, setLoading] = useState(false);

  const handleLocateShop = () => {
    setLoading(true);

    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log('Location:', { latitude, longitude });
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching location:', {
          code: error.code,
          message: error.message,
        });
        alert(`Location error (${error.code}): ${error.message || 'Unknown error'}`);
        setLoading(false);
      }
    );

  };

  return (
    <Button onClick={handleLocateShop} disabled={loading}>
      {loading ? 'Locating...' : '📍 Locate Shop'}
    </Button>
  );
};

export default LocateShopButton;
