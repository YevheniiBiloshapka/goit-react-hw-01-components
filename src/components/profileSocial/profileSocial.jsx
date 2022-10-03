import PropTypes from 'prop-types';

import {
  Card,
  ProfileDescr,
  Description,
  Avatar,
  Name,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './profileSocial.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <>
      <Card key="username">
        <Description>
          <Avatar src={avatar} alt="User avatar" className="avatar" />
          <Name>{username}</Name>
          <ProfileDescr>@{tag}</ProfileDescr>
          <ProfileDescr>{location}</ProfileDescr>
        </Description>

        <Stats>
          <StatsItem>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
          </StatsItem>
        </Stats>
      </Card>
    </>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
