import { Profile } from './profile/profile';

export const ProfileSocial = ({ users }) => {
  return (
    <>
      {users.map(({ username, avatar, tag, location, stats }) => (
        <Profile
          key={username}
          username={username}
          avatar={avatar}
          tag={tag}
          location={location}
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        />
      ))}
    </>
  );
};
