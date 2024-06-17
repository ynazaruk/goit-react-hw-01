import userData from "../../userData.json";
import css from "../Profile/Profile.module.css";

export const Profile = () => {
  return (
    <div className={css.container}>
      <div>
        <img className={css.image} src={userData.avatar} alt="User avatar" />
        <p className={css.name}>{userData.username}</p>
        <p className={css.text}>@{userData.tag}</p>
        <p className={css.text}>{userData.location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.info}>Followers</span>
          <span className={css.quantity}>{userData.stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.info}>Views</span>
          <span className={css.quantity}>{userData.stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.info}>Likes</span>
          <span className={css.quantity}>{userData.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
