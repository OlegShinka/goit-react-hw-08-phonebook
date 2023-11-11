import { ContactsList } from './contactsList/contactsList';
import Form from './form/form';
import { Filter } from './filter/filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h2> Phonebook</h2>

      <Form />
      <h2>Contacts</h2>

      <Filter />
      {isLoading && !error && (
        <p>
          <b>Request in progress...</b>
        </p>
      )}
      {error && (
        <p>
          Ups ... <b>Reload page</b>
        </p>
      )}
      <ContactsList />
    </div>
  );
};

export default App;
