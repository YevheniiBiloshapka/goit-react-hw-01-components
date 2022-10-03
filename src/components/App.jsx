import { Profile } from './profileSocial/profileSocial';
import { Statistic } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../path/to/user.json';
import data from '../path/to/data.json';
import transactions from '../path/to/transactions.json';
import friends from '../path/to/friends.json';
import styled from 'styled-components';

const Box = styled.div`
  padding: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
`;
const TableBox = styled.div`
  margin: 0 auto;
  height: 400px;
  width: 978px;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar-track {
    border-radius: 0 6px 6px 0;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #80dcff;
    border-radius: 10px;
  }
`;

export const App = () => {
  return (
    <>
      <Box>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <FriendList friends={friends} />
        <Statistic data={data} />
      </Box>
      <TableBox>
        <TransactionHistory items={transactions} />
      </TableBox>
    </>
  );
};
