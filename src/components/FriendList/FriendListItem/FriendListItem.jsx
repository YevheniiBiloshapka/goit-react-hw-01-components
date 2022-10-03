import { Item, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Item key={id}>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </Item>
        );
      })}
    </>
  );
};
