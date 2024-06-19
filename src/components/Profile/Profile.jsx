import css from "../Profile/Profile.module.css";

export default function Profile({ username, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.name}>{username}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.info}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.info}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.info}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
