import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';
import { selectUserName } from 'redux/selectors';
import { BtnStyle, SpanStyle } from './userMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  return (
    <div>
      <SpanStyle>Welcome, {userName}</SpanStyle>
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
