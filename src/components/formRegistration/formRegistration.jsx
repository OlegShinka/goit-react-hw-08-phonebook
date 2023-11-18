import { useDispatch } from 'react-redux';
import {
  Cont,
  Inp,
  FormStyle,
  BtnStyle,
} from '../formContacts/formContacts.styled';
import { useState } from 'react';
import { register } from 'redux/operations';

export const FormRegistration = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const authData = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(register(authData));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Cont>
        <FormStyle onSubmit={handleSubmit}>
          <label> Name</label>
          <Inp
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          ></Inp>
          <label>E-mail</label>
          <Inp
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          ></Inp>
          <label>Password</label>
          <Inp
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          ></Inp>
          <BtnStyle type="submit">Registration</BtnStyle>
        </FormStyle>
      </Cont>
    </div>
  );
};
export default FormRegistration;
