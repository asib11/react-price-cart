import './Link.css';
import PropTypes from 'prop-types';


const Link = ({navBar}) => {
    return (
        <li className='md:flex mr-10'>
            <a href={navBar.route}>{navBar.name}</a>
        </li>
    );
};

Link.propTypes = {
    navBar: PropTypes.object,
     // Use the appropriate PropTypes type
};
export default Link;