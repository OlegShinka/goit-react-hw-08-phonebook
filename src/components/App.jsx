import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import Contacts from 'pages/Contacts/contacts';
import { Registration } from 'pages/Registration/registration';
import { Login } from 'pages/Login/login';
import NotFound from 'pages/NotFound/notFound';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="contacts" element={<Contacts />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
