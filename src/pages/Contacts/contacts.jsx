// import { ContactsList } from '/Users/macbookair/Documents/GitHub/reactHW2023/goit-react-hw-08-phonebook/src/components/contactsList';
//import Form from '../';
//import { Filter } from './filter/filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import Form from 'components/form/form';
import { Filter } from 'components/filter/filter';
import { ContactsList } from 'components/contactsList/contactsList';

export const Contacts = () => {
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

export default Contacts;
