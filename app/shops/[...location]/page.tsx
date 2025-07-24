// File: app/shops/[...location]/page.tsx

import clientPromise from '@/lib/shopsDB';
import Image from 'next/image';
import Link from 'next/link';
import DisplayShops from '@/components/DisplayShops';

interface LocationProps {
  params: {
    location?: string[];
  };
}


const Page = async ({ params }: LocationProps) => {
  const location_params = await params
  const location = location_params.location
  const latitude = location && location[0] ? parseFloat(location[0]) : null;
  const longitude = location && location[1] ? parseFloat(location[1]) : null

  if (!latitude || !longitude) {
    return <p>Unable to determine your location.</p>;
  }
  const client = await clientPromise;
  const db = client.db("shops");

  await db.collection("shops_details").createIndex({ location: "2dsphere" });

  const shops = await db.collection("shops_details").find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [longitude, latitude], // Always [longitude, latitude]
        },
        $maxDistance: 5000,
      }
    }
  }).toArray();


  return (
    <DisplayShops shops={shops} />
  );
};

export default Page;
