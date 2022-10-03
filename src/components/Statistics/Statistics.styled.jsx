import styled from 'styled-components';
export const Statistics = styled.section`
  min-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  padding: 32px;
  margin: 0;

  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: #7f8e9d;
`;

export const StatList = styled.ul`
  display: flex;
`;
