import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';
import { selectUserName } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  return (
    <div>
      <span>Welcome, {userName}</span>
      <button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log Out
      </button>
    </div>
  );
};
