import { Card } from 'components/contactCard/contactCard';
import { Cnt, List } from './contactsList.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactsList = () => {
  //забираєм з глобального стейту
  const contacts = useSelector(selectContacts); //contacts.contacts  увага

  const filter = useSelector(selectFilter); // filter.filter увага

  const onContacts = filter => {
    if (filter === '') {
      return contacts;
    } else {
      return contacts.filter(item => {
        return item.name.toLowerCase().includes(filter.toLowerCase());
      });
    }
  };
  const listContacts = onContacts(filter);

  return (
    <div>
      <List>
        {listContacts.map(({ name, number, id }) => (
          <Cnt key={id}>
            <Card contactName={name} number={number} id={id} />
          </Cnt>
        ))}
      </List>
    </div>
  );
};
