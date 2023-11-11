import { Link } from 'react-router-dom';
export const NotFound = () => {
  return (
    <div>
      <h3>Page not found !</h3>
      <Link to="/">Go to homepage</Link>
    </div>
  );
};
export default NotFound;
