import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav `
  background: white;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  transition: 0.5s all ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;

  z-index: 1;
  width: 100%;
  max-width: 100vw;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
      padding-right: 30px;
      padding-left: 30px;
  }
  
`;

export const NavLogo = styled.h1`
  color: #fff;
  justify-self: flex-start;
  color: black;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  z-index: 999;
  font-size: 20px;
`;

export const NavIcon = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 32px;

    @media screen and (max-width: 820px) {
        max-height: 30px;
        max-width: 100px;
    }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 40%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 999;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    left: ${({ click }) => (click ? '0' : '-100%')};
    opacity: 1;
    transition: all 0.3s ease;
    background: rgb(30, 30, 30);
  }
`;

export const NavItem = styled.li`
  height: 60px;
  border-bottom: 2px solid transparent;
  line-height: 15px;
  
  &:hover {
    border-bottom: 2px solid #fff;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`

export const NavBottom = styled.div `
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    position: fixed;
    bottom: 0;
    color: #fff;
    margin: 30px;
  }
`

export const SocialIcon = styled.p `
  display: none;

  @media screen and (max-width: 960px) {
   
  }
`

export const NavLanguage = styled.p `

  display: none;
  
  @media screen and (max-width: 960px) {
    display: flex;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 35px;
    word-break: keep-all;
    line-height: 20px;
  }
`


export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #fff;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

export const ReserveButton = styled.button`
    background: blue;
    white-space: nowrap;
    height: 60px;
    padding: 10px 25px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    outline: none;
    border: 0px;
    cursor: pointer;
    margin-right: 0;
    width: 100%;

    &:hover {
        transition: all 0.3s ease-out;
        border: 0px;
        background: white;
        color: black;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`