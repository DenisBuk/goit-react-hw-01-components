import css from './Transaction.module.css';
import PropTypes from 'prop-types';
import { Statistics } from 'components/Statistics/Statistics';

const createColor = () => {
    const color =
    'rgba(' +
    Math.round(Math.random() * 255) + 
        ',' + 
    Math.round(Math.random() * 255) + 
        ',' + 
    Math.round(Math.random() * 255) + 
        ',' + 
        0.2 +
        ')';
    
    return color;
}
 
export const Statistics = ({ title, stats }) => { 
    return (
        
    )
}

Statistics.propTypes = {
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired,
};