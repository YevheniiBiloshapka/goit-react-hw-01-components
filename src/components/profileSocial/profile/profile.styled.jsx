import styled from 'styled-components';

export const Card = styled.div`
  overflow: hidden;
  width: 260px;
  background: ${p => p.theme.colors.bg};
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: ${p => p.theme.radii.normal};
  text-align: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  padding-bottom: 33px;
  gap: 9px;
`;
export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 18px;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
`;
export const Name = styled.p`
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.bold};
  letter-spacing: 0.01em;
  margin-bottom: 0;

  color: ${p => p.theme.colors.h1};
`;
export const ProfileDescr = styled.p`
  color: ${p => p.theme.colors.txt};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.bold};
  margin-bottom: 0;
`;
export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-top: ${p => p.theme.borders.normal};
  list-style: none;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;

  width: 86.67px;
  padding: 19px 0px;

  background: ${p => p.theme.colors.bgdElement};

  border-right: ${p => p.theme.borders.normal};
  &:last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  color: ${p => p.theme.colors.txt};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.bold};
`;
export const Quantity = styled.span`
  color: ${p => p.theme.colors.h1};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.bold};
`;
