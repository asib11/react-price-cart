import PropTypes from 'prop-types';
import { CheckCircleIcon } from '@heroicons/react/24/solid'


const Features = ({feature}) => {
    return (
        <div className='flex justify-center items-center'>
            <CheckCircleIcon className="h-4 w-4 " />
            <span className='pl-3'>{feature}</span>
        </div>
    );
};

Features.propTypes = {
    feature: PropTypes.object,
     // Use the appropriate PropTypes type
};

export default Features;