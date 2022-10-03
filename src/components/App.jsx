import { ProfileSocial } from './profileSocial/profileSocial';
import user from '../path/to/user.json';
import styled from 'styled-components';

const Box = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const App = () => {
  return (
    <Box>
      <ProfileSocial users={user} />
    </Box>
  );
};
