import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import Form from 'components/formContacts/formContacts';
import { Filter } from 'components/filter/filter';
import { ContactsList } from 'components/contactsList/contactsList';
import { ContainerFF } from './contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ContainerFF>
      <div>
        <Form />
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
      </div>

      <ContactsList />
    </ContainerFF>
  );
};

export default Contacts;
