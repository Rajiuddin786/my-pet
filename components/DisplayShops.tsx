import Image from 'next/image';
import { ObjectId } from 'mongodb';
import Link from 'next/link';

interface Shop {
    _id: ObjectId;
    name: string;
    description: string;
    image: string;
    location: {
        type: 'Point';
        coordinates: [number, number];
    };
}

export default function DisplayShops({ shops }: { shops: Shop[] }) {
    return (
        <section className="flex flex-wrap justify-center items-center">
            {shops.map((shop) => (
                <Link href={`/shops/${shop._id}`} key={shop._id.toString()}>
                    <div
                        key={shop._id.toString()}
                        className="w-full sm:w-[300px] h-[400px] rounded-md shadow-lg p-4 m-4"
                    >
                        <div className="relative w-full h-[200px]">
                            <Image
                                src={shop?.image || '/default-shop-image.jpg'}
                                alt={shop?.name || 'Shop image'}
                                fill
                                className="object-cover rounded-md"
                                sizes="100vw"
                            />
                        </div>
                        <p className="font-semibold mt-2">{shop.name}</p>
                        <p className="text-sm text-gray-600">{shop.description}</p>
                    </div>
                </Link>
            ))}
        </section>
    );
}
