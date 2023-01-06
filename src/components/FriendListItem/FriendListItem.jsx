import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export default function FriendListItem ({ avatar, name, isOnline }) {
    return (
        <li className={css.item}>
            <span className={isOnline ? css.isLine : css.ofLine}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
};
 
FriendListItem.prototype = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
