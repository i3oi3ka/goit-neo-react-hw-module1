import friendStyles from './FriendListItem.module.css';

function FriendItem({ friend }) {
  return (
    <div className={friendStyles.container}>
      <img src={friend.avatar} alt="avatar" width="48" />
      <p className={friendStyles.name}>{friend.name}</p>
      <p
        className={
          friend.isOnline ? friendStyles.isOnline : friendStyles.isOffline
        }
      >
        {friend.isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}

export default FriendItem;
