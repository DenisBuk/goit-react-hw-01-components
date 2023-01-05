import css from './Statistics.module.css';
import propTypes from 'prop-types';

const createColor = () => {
    const color =
    'rgba(' +
    Math.round(Math.random() * 255) + 
        ',' + 
    Math.round(Math.random() * 255) + 
        ',' + 
    Math.round(Math.random() * 255) + 
        ',' + 
    ')';
 }


export const Statistics = ({ title, stats }) => { 
    return (
        <section className={css.statistics}>
            {tittle && <h2 className={css.title}>{title}</h2>}

            <ul className={css.stats__list}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li className={css.stats}
                            key={id}
                            style={{ backgroundColor: createColor() }}>
                            <span></span>
                            <span></span>
                        </li>
                    )
                }
                )}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired,
};