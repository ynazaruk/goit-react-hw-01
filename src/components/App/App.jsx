import userData from "../../userData.json";
import { Profile } from "../Profile/Profile";

export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.image}
        stats={userData.stats}
      />
    </>
  );
};
