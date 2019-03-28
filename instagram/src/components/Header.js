import React from 'react';
import './Header.css';
import logoMark from '../assets/glyph-logo_May2016.png';
import logoType from '../assets/instagram-logo.png';
import glass from '../assets/magnifiying-glass.png';
import discover from '../assets/discover.png';
import heart from '../assets/heart.png';
import user from '../assets/User.png';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.098);
  background: #fff;
`;

const MainHeaderContainer = styled.div`
  margin: 0 auto;
  width: 1010px;
  height: 77px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 26px;
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LogoMark = styled.img`
  width: 24px;
  height: 24px;
`;

const Divider = styled.div`
  width: 1px;
  height: 28px;
  margin: 0 16px;
  border: 0.5px solid #262626;
`;

const LogoType = styled.img`
  width: 103px;
  height: 29px;
  margin-top: 7px;
`;

const Form = styled.form`
  width: 215px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const Loupe = styled.img`
  height: 10px;
  width: 10px;
  opacity: 0.5;
  background-repeat: no-repeat;
  position: absolute;
  margin-left: 70px;
  margin-top: 9px;
  z-index: 2;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
  background: #fafafa;
  text-align: center;
  color: #999;
  font-size: 14px;
  font-weight: 400;
  outline: none;

  &::placeholder {
    opacity: 0.8;
  }
`;

const MainNav = styled.nav`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1%;
`;

const NavButton = styled.button`
  border: 0;
  background: transparent;
  outline: none;

  ${props =>
    props.color === 'log-out'
      ? {
          background: '#3897f0',
          color: '#fff',
          'font-weight': '600',
          'font-size': '14px',
          border: '1px solid #3897f0',
          'border-radius': '4px',
          width: '80px',
          height: '30px',
          'margin-left': '20px',
          outline: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s'
        }
      : null}

  &:hover {
    opacity: 0.9;
  }
`;

const NavButtonImg = styled.img`
  ${props =>
    props.src === discover
      ? {
          cursor: 'pointer',
          width: '23px',
          height: '23px'
        }
      : null}
  ${props =>
    props.src === heart
      ? {
          cursor: 'pointer',
          width: '24px',
          height: '24px'
        }
      : null}
  ${props =>
    props.src === user
      ? {
          cursor: 'pointer',
          width: '22px',
          height: '22px'
        }
      : null}
`;

const ButtonForm = styled(Form)`
  width: 80px;
  height: 30px;
  display: block;
`;

class Header extends React.Component {
  handleLogOut() {
    localStorage.clear();
  }

  render() {
    return (
      <HeaderDiv>
        <MainHeaderContainer>
          <LogoDiv>
            <LogoMark src={logoMark} alt="instagram logo mark" />
            <Divider />
            <LogoType src={logoType} alt="instagram logo type" />
          </LogoDiv>
          <Form onSubmit={this.props.onSubmit}>
            <SearchDiv>
              <Loupe
                src={glass}
                className={`${this.props.search ? 'hide' : ''}`}
                alt="search-icon"
              />
              <Input
                type="text"
                placeholder="Search"
                value={this.props.search}
                name="search"
                onChange={this.props.onChange}
              />
            </SearchDiv>
          </Form>
          <MainNav>
            <NavButton>
              <NavButtonImg src={discover} alt="discover" />
            </NavButton>
            <NavButton>
              <NavButtonImg src={heart} alt="likes" />
            </NavButton>
            <NavButton>
              <NavButtonImg src={user} alt="profile" />
            </NavButton>
            <ButtonForm>
              <NavButton
                color="log-out"
                onClick={this.handleLogOut}
                className="log-out"
              >
                Log out
              </NavButton>
            </ButtonForm>
          </MainNav>
        </MainHeaderContainer>
      </HeaderDiv>
    );
  }
}

Header.propTypes = {
  submit: PropTypes.func,
  search: PropTypes.func,
  onChange: PropTypes.func
};

export default Header;
