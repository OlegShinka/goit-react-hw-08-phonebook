import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import {
  selectError,
  selectIsLoading,
  selectIsLoggedin,
} from 'redux/selectors';
import Form from 'components/formContacts/formContacts';
import { Filter } from 'components/filter/filter';
import { ContactsList } from 'components/contactsList/contactsList';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isloggedIn = useSelector(selectIsLoggedin);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      {isloggedIn && (
        <div>
          <h2> Phonebook</h2>
          <Form />
          <h2>Contacts</h2>
          <Filter />
        </div>
      )}

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
