import styled from 'styled-components';
import { FriendListItem } from './FriendListItem/FriendListItem';

const Box = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;
export const FriendList = ({ friends }) => {
  return (
    <Box>
      <FriendListItem friends={friends} />
    </Box>
  );
};
