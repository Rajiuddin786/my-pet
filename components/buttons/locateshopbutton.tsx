'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const LocateShopButton = ({shops}:{shops:string}) => {
  const name=shops;
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLocateShop() {
    setLoading(true)
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    const { latitude, longitude } = data;
    router.push(`/shops/${latitude}/${longitude}`);
    setLoading(false)
  }

  return (
    <Button onClick={handleLocateShop} disabled={loading}>
      {loading ? 'Locating...' : name}
    </Button>
  );
};

export default LocateShopButton;
