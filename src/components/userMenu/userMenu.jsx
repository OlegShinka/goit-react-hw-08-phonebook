import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';
import { selectUserEmail } from 'redux/selectors';
import { BtnStyle, SpanStyle } from './userMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);
  return (
    <div>
      <SpanStyle>Welcome, {userEmail}</SpanStyle>
      <BtnStyle
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log Out
      </BtnStyle>
    </div>
  );
};
