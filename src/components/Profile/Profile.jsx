import css from './Profile/Profile.module.css';
import PropTypes from 'prop-types';

export const  Profile = ({ username, tag, location, avatar, stats }) => {
    return(
        <div className={css.profile}>
            <div className={css.description}>
                <img src={avatar} alt={username} width="300" className={css.avatar} />
            <p></p>
            <p></p>
            <p></p>
            </div>
    </div >
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}
