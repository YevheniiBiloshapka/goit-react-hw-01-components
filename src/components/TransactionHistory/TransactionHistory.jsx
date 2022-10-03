import { Table, TBody, TColum } from './TransactionHistory.styled';
import { TransactionItem } from './TransactionItem/TransactionItem';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TColum>Type</TColum>
          <TColum>Amount</TColum>
          <TColum>Currency</TColum>
        </tr>
      </thead>

      <TBody>
        <TransactionItem items={items} />
      </TBody>
    </Table>
  );
};
