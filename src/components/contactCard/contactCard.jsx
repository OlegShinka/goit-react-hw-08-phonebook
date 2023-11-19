import { useDispatch } from 'react-redux';
import { BtnStyle, ContainerCard } from './contactCard.styled';
import { HiTrash } from 'react-icons/hi';
import { deleteContact } from 'redux/operations';

export const Card = ({ contactName, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ContainerCard>
      <div>
        <span>{contactName} :</span>
        <span>{number} </span>
      </div>

      <BtnStyle type="button" onClick={() => dispatch(deleteContact(id))}>
        <HiTrash />
      </BtnStyle>
    </ContainerCard>
  );
};
