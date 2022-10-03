import styled from 'styled-components';
export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 14px;
  width: 260px;

  background: ${p => p.theme.colors.bg};
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: ${p => p.theme.radii.normal}; ;
`;

export const Status = styled.span`
  display: block;
  border-radius: ${p => p.theme.radii.circle};
  width: 12px;
  height: 12px;
  margin-right: 14px;

  background: ${p => {
    if (!p.isOnline) {
      return '#E54C65';
    }
    return '#56ab56';
  }};
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: ${p => p.theme.radii.normal};
  margin-right: 8px;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
`;
export const Name = styled.p`
  margin: 0;
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.bold};
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.h1};
`;
