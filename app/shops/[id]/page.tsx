import React from 'react'
import clientPromise from "@/lib/db";
import Image from 'next/image'
import { ObjectId } from 'mongodb';


async function page({ params }: { params: { id: string } }) {
    const client = await clientPromise;
    const db = client.db('shops');
    const collection = db.collection('shops_details');
    const id_params = await params;
    const id = id_params.id;

    const shop = await collection.findOne({ _id:new ObjectId(id) });
    console.log(shop);
    return (
        <section className='flex flex-col items-center justify-center h-[100vh] w-[100%] bg-gray-100 shadow-md p-4'>
            <div>
                <div className="w-[100%] h-[500px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={shop?.image || '/default-shop-image.jpg'}
                        alt={shop?.name || 'Shop Image'}
                        className="object-cover rounded-lg h-full"
                        width={1000}
                        height={300}
                    />
                </div>

                <h1 className='text-2xl font-bold mt-4'>{shop?.name || 'Shop Name'}</h1>
                <p className='text-gray-700 mt-2'>{shop?.description || 'Shop Description'}</p>
            </div>
        </section>
    )
}

page.propTypes = {}

export default page
