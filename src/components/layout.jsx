import { Outlet } from 'react-router-dom';
import { AppBar } from './appBar/appBar';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};
