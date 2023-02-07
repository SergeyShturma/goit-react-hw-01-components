import s from './FriendListItem.module.css'
import PropTypes from "prop-types";

export const FriendListItem = ({ isOnline, name, avatar }) => {
	const status = isOnline ? s.statusOn : s.statusOff;
	return <>
	  			<span className={status}>{isOnline}</span>
  				<img className={s.avatar} src={avatar} alt="User avatar" width="48" />
  				<p className={s.name}>{name}</p>		
	</>
}

FriendListItem.propTypes = {
	friends: PropTypes.arrayOf(PropTypes.exact({
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			avatar: PropTypes.string.isRequired,}))	
};