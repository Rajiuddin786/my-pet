'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";

const LocateShopButton = () => {
  const [loading, setLoading] = useState(false);

  async function handleLocateShop() {
    try {
      setLoading(true);

      // Check if location is already in sessionStorage
      const cachedLocation = sessionStorage.getItem('userLocation');
      if (cachedLocation) {
        console.log("Using cached location:", JSON.parse(cachedLocation));
        return;
      }

      // Fetch new location if not cached
      const res = await fetch('https://ipapi.co/json/');
      const data = await res.json();
      const { latitude, longitude } = data;

      // Store location in sessionStorage
      sessionStorage.setItem('userLocation', JSON.stringify({ latitude, longitude }));

      console.log("Fetched and stored location:", { latitude, longitude });
    } catch (error) {
      console.error("Error locating shop:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button onClick={handleLocateShop} disabled={loading}>
      {loading ? 'Locating...' : '📍 Locate Shop'}
    </Button>
  );
};

export default LocateShopButton;
