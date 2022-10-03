import { Title, Statistics, StatList } from './Statistics.styled';
import { ListItem } from './item/ListItem';
export const Statistic = ({ data }) => {
  return (
    <Statistics>
      <Title>Upload stats</Title>

      <StatList>
        <ListItem data={data} />
      </StatList>
    </Statistics>
  );
};
