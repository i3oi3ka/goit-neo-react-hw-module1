import profileStyles from './Profile.module.css';

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={profileStyles.container}>
      <div>
        <img className={profileStyles.image} src={image} alt="User avatar" />
        <p className={profileStyles.name}>{name}</p>
        <p className={profileStyles.tag}>@{tag}</p>
        <p className={profileStyles.location}>{location}</p>
      </div>
      <ul className={profileStyles.stats}>
        <li className={profileStyles.statsItem}>
          <span className={profileStyles.statsItemLabel}>Followers</span>
          <span className={profileStyles.statsItemQuantity}>
            {stats.followers}
          </span>
        </li>
        <li className={profileStyles.statsItem}>
          <span className={profileStyles.statsItemLabel}>Views</span>
          <span className={profileStyles.statsItemQuantity}>{stats.views}</span>
        </li>
        <li className={profileStyles.statsItem}>
          <span className={profileStyles.statsItemLabel}>Likes</span>
          <span className={profileStyles.statsItemQuantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
