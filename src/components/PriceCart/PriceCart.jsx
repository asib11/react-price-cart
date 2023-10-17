import Proptypes from 'prop-types'
import Features from '../Feature/Features';

const PriceCart = ({price}) => {
    return (
        <div className='mt-6 shadow-xl hover:shadow-2xl rounded-lg p-4 text-center flex flex-col'>
            <h3>
                <span className='text-6xl font-extrabold text-cyan-500'>${price.price}</span>
                <span className='text-3xl font-semibold'>/mon</span>
            </h3>
            <h2 className='text-4xl font-bold'>{price.name}</h2>
            <div className='py-12'>
            <p className='underline font-bold pb-4'>Features</p>
            {
                price.features.map((feature, idx) => <Features feature = {feature} key ={idx}></Features>)
            }
            </div>
            <button className='w-full mt-auto bg-cyan-200 hover:bg-cyan-400 py-2 rounded-md'>Buy Now</button>
        </div>
    );
};

PriceCart.propTypes ={
    price: Proptypes.object,
};

export default PriceCart;