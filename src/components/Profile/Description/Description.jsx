import PropTypes from "prop-types";
import d from './Description.module.css'
export const Description = ({ username, location, avatar, tag }) => {
    return <div className={d.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={d.avatar}
    />
    <p className={d.name}>{username}</p>
    <p className={d.tag}>@{tag}</p>
    <p className={d.location}>{location}</p>
    </div>
}
  
Description.propTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	
};