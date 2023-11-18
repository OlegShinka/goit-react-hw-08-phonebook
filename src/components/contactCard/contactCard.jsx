import { useDispatch } from 'react-redux';
import { BtnStyle } from './contactCard.styled';
import { HiTrash } from 'react-icons/hi';
import { deleteContact } from 'redux/operations';

export const Card = ({ contactName, number, contactId }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span>{contactName} :</span>
      <span>{number} </span>

      <BtnStyle
        type="button"
        onClick={() => dispatch(deleteContact(contactId))}
      >
        <HiTrash />
      </BtnStyle>
    </div>
  );
};
