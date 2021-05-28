import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavLanguage, NavBottom, SocialIcon, ReserveButton } from './Navbar_element'
import { IconContext } from 'react-icons/lib'
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { i18n, t } = useTranslation()
    const [click, setClick] = useState(false)
    const [ scrollNav, setScrollNav] = useState(false);

    function asdf(lang){
        i18n.changeLanguage(lang);
      }
    
    const handleClick = () => setClick(!click)

    const changeNav = () => {
        if(window.scrollY > 0) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

   


    return (
        <>
            <IconContext.Provider value= {{ color: '#fff'}}>
                <Nav scrollNav = {scrollNav}>
                    <NavbarContainer>
                        <NavLogo scrollNav = {scrollNav} to='/ibm-demozone' >
                            {/* <NavIcon src={require('../../images/drawing.svg').default} alt='ibm' /> */}
                            IBM Client Center Korea
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                            </NavItem>
                            <NavItem>
                                <ReserveButton scrollNav = {scrollNav}>프로그램 신청하기</ReserveButton>
                            </NavItem>

                            <NavBottom>
                                <NavLanguage onClick={()=>asdf('ko')}>한국어</NavLanguage>
                                <NavLanguage onClick={()=>asdf('en')}>English</NavLanguage>
                            </NavBottom>
                            <NavBottom>
                                <SocialIcon>asdf</SocialIcon>
                            </NavBottom>
                            
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
