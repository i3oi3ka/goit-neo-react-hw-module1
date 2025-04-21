import FriendListItem from '../FriendListItem/FriendListItem';
import friendsStyless from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={friendsStyless.container}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
