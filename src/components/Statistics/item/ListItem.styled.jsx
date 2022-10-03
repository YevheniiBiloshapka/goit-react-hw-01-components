import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2px;

  width: 65px;
  height: 50px;
  background-color: ${props => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }};
  color: ${p => p.theme.colors.bg};
`;
export const Label = styled.span`
  display: block;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.bold};

  margin: 0;
`;
export const Percentage = styled.span`
  display: block;

  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.fontSizes};
  text-align: center;
  margin: 0;
`;
