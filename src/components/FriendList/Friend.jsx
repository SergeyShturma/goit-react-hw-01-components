import s from "components/FriendList/Friend.module.css"
import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendList/FriendListItem/FriendListItem"

export const FriendList = ({ friends }) => {
  return (<ul className={s.friendList}>
    {friends.map(({ id, isOnline, avatar, name }) =>
    (<li className={s.item} key={id}>
          <FriendListItem isOnline={isOnline} avatar={avatar} name={name}  />
        </li>)
      )
    }
    </ul>)
  }


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
