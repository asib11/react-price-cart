import { useEffect, useState } from 'react';
import './Price.css'
import PriceCart from '../PriceCart/PriceCart';

const Price = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('price.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    },[])
    return (
        <div className='my-6 mx-4'>
            <h1 className='text-5xl bg-cyan-200 text-center mt-4 px-2 py-4 uppercase font-extrabold rounded-3xl'>affortable Price</h1>
            <div className='grid md:grid-cols-3 gap-12 '>
            {
                prices.map(price =><PriceCart key ={price.id} price ={price}></PriceCart>)
            }
            
            </div>
        </div>
    );
};

export default Price;