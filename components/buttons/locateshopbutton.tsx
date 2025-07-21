'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";

const LocateShopButton = () => {
  const [loading, setLoading] = useState(false);
  
  const handleLocateShop = () => {
    setLoading(true);
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    console.log(data);
    return data; // Contains country, city, region, latitude, longitude, etc.


  }

  return (
    <Button onClick={handleLocateShop} disabled={loading}>
      {loading ? 'Locating...' : '📍 Locate Shop'}
    </Button>
  );
};

export default LocateShopButton;
