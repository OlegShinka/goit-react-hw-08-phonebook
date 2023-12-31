import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import { BtnStyle, FormLoginStyle, Inp } from './formLogin.styled';

export const FormLogIn = () => {
  const dispatch = useDispatch();
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'email':
        SetEmail(value);
        break;
      case 'password':
        SetPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const logInData = {
      email: email,
      password: password,
    };
    dispatch(logIn(logInData));
    SetEmail('');
    SetPassword('');
  };
  return (
    <div>
      <FormLoginStyle onSubmit={handleSubmit}>
        <label>E-mail</label>
        <Inp type="email" name="email" value={email} onChange={handleChange} />
        <label>Password</label>
        <Inp
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <BtnStyle type="submit">Log In</BtnStyle>
      </FormLoginStyle>
    </div>
  );
};
