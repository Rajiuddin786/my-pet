import { NextRequest, NextResponse } from 'next/server';

type Shop = {
  id: string;
  name: string;
  lat: number;
  lon: number;
};

// Haversine formula to calculate distance between two lat/lon points
function getDistanceFromLatLonInKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Radius of the earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

export async function POST(req: NextRequest) {
  const { latitude, longitude } = await req.json();

  const allShops: Shop[] = [
    { id: '1', name: 'Happy Paws', lat: 12.97, lon: 77.59 },
    { id: '2', name: 'PetBuddy', lat: 12.95, lon: 77.60 },
    { id: '3', name: 'Furry Friends', lat: 13.10, lon: 77.58 },
  ];

  const shopsNearby = allShops
    .map((shop) => {
      const distance = getDistanceFromLatLonInKm(latitude, longitude, shop.lat, shop.lon);
      return { ...shop, distance: distance.toFixed(2) };
    })
    .filter((shop) => parseFloat(shop.distance) <= 5) // within 5 km
    .sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));

  return NextResponse.json({ shops: shopsNearby });
}
