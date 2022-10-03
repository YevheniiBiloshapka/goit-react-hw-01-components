import styled from 'styled-components';

export const Table = styled.table`
  width: 978px;
  overflow: hidden;
  position: relative;
  border-spacing: 0px;
  border-collapse: collapse;

  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.bold};
  letter-spacing: 0.03em;
  text-align: center;

  background: ${p => p.theme.colors.bg};
  color: ${p => p.theme.colors.txtsecondary};
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;
  & thead {
    position: sticky;
    top: 0;
    z-index: 1;
  }
`;

export const TColum = styled.th`
  width: 33.3333%;
  padding: 10px;

  font-weight: ${p => p.theme.fontWeights.semibold};
  text-transform: uppercase;
  background: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.bg};
  border-right: 0.5px solid ${p => p.theme.colors.stroke};
  &:last-child {
    border-right: none;
  }
`;

export const TBody = styled.tbody`
  & td {
    padding: 10px;
    border-right: 0.5px solid ${p => p.theme.colors.stroke};
    &:last-child {
      border-right: none;
    }
  }

  & tr:nth-child(2n) {
    background-color: ${p => p.theme.colors.bgdElement};
  }
  & tr:hover {
    background-color: #c8effe;
  }
`;
