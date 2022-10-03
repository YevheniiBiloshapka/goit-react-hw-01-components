import { Item, Label, Percentage } from './ListItem.styled';
import PropTypes from 'prop-types';

export const ListItem = ({ data }) => {
  return (
    <>
      {data.map(({ id, label, percentage }) => (
        <Item key={id}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </Item>
      ))}
    </>
  );
};

ListItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
