import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavBottom, SocialIcon, ReserveButton } from './Navbar_element'
import { IconContext } from 'react-icons/lib'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const [ scrollNav, setScrollNav] = useState(false);
    
    const handleClick = () => setClick(!click)

    const changeNav = () => {
        if(window.scrollY > 0) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    function refreshPage() {
        window.scrollTo(0, 0)
        window.location.reload();
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

   


    return (
        <>
            <IconContext.Provider scrollNav = {scrollNav} value= {{ color: (scrollNav ? '#000000' : '#FFF')}}>
                <Nav scrollNav = {scrollNav}>
                    <NavbarContainer>
                        <NavLogo scrollNav = {scrollNav} onClick={refreshPage} >
                            IBM Client Center Korea
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                            </NavItem>
                            <NavItem>
                                <a href="https://ibm.com/kr-ko" target="_blank" rel="noreferrer">    
                                    <ReserveButton scrollNav = {scrollNav}>IBM 홈페이지</ReserveButton>
                                </a>
                            </NavItem>
                            <NavItem style={{marginRight: '0px'}}>
                                <a href="https://ibm.com/kr-ko" target="_blank" rel="noreferrer">    
                                    <ReserveButton scrollNav = {scrollNav}>프로그램 신청하기</ReserveButton>
                                </a>
                            </NavItem>
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
