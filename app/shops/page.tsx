import clientPromise from '@/lib/shopsDB'
import DisplayShops from '@/components/DisplayShops';



const page = async () => {
    const client = await clientPromise;
    const db = client.db('shops');
    const collection = db.collection('shops_details');
    const shops = await collection.find({}).toArray();
    return (<DisplayShops shops={shops} />)
}

export default page