import React from 'react';
import styled from 'styled-components';
import logoType from '../../assets/instagram-logo.png';

const LoginDiv = styled.div`
  width: 640px;
  height: 460px;
  margin: 380px auto;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 50px;
`;

const LogoDiv = styled.div`
  width: 35%;
`;

const LogoType = styled.img`
  width: 200px;
  margin-top: 7px;
`;

const LoginForm = styled.form`
  width: 60%;
  height: 28%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: -70px;
`;

const Input = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
  background: #fafafa;
  padding: 10px;
  color: #262626;
  font-size: 14px;
  font-weight: 400;
  outline: none;

  &::placeholder {
    opacity: 0.7;
    font-weight: 500;
`;

const LoginButton = styled.button`
  border: 0;
  background: transparent;
  outline: none;

  ${props =>
    props.color === 'log-in'
      ? {
          background: '#3897f0',
          color: '#fff',
          'font-weight': '600',
          'font-size': '14px',
          border: '1px solid #3897f0',
          'border-radius': '4px',
          width: '100%',
          height: '32px',
          outline: 'none',
          cursor: 'pointer',
          'margin-top': '1px',
          transition: 'all 0.3s'
        }
      : null}

  &:hover {
    opacity: 0.8;
  }
`;

class LoginPage extends React.Component {
  onLoginClick = e => {
    if (
      this.props.username === this.props.user &&
      this.props.password === this.props.pass
    ) {
      const username = JSON.stringify(this.props.username);
      const password = JSON.stringify(this.props.pass);
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    }
  };

  render() {
    return (
      <LoginDiv>
        <LogoDiv>
          <LogoType src={logoType} alt="instagram logo mark" />
        </LogoDiv>
        <LoginForm>
          <Input
            onChange={this.props.onChange}
            required
            type="text"
            name="username"
            value={this.props.username}
            placeholder="Username"
          />
          <Input
            onChange={this.props.onChange}
            required
            type="password"
            name="password"
            value={this.props.password}
            placeholder="Password"
          />
          <LoginButton color="log-in" onClick={this.onLoginClick}>
            Login
          </LoginButton>
        </LoginForm>
      </LoginDiv>
    );
  }
}

export default LoginPage;
