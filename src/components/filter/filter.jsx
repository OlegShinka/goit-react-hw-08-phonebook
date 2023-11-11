import { useDispatch } from 'react-redux';
import { Cont, Inp } from './filter.styled';
import { addFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Cont>
        <h2> Find contacts by name</h2>
        <Inp
          type="text"
          name="filter"
          onChange={evt => dispatch(addFilter(evt.target.value))}
        />
      </Cont>
    </div>
  );
};
