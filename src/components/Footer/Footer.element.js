import styled from 'styled-components'

export const FooterContainer = styled.div `
    background-color: rgb(20, 20, 20);
    padding: 6rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    
`

export const FooterDiv = styled.div `
    z-index: 1;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 5vw;
    padding-left: 5vw;
    

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
    
`

export const FooterLinksContainer = styled.div `
    width: 100%;
    display: flex;
`

export const FooterLinkWrapper = styled.div `
    display: flex;
    width:100%;
    
    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 100%;
    }
`

export const FooterLinksItems = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px 0;
    text-align: left;
    width: 50%;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1 `
    margin-bottom: 5px;
    line-height: 20px;
    font-size: 18px;
    width: 50%;
    padding-bottom: 10px;
    border-bottom: 2px solid #FFF;
    margin-bottom: 15px;

    @media screen and (max-width: 420px) {
        width: 100%;
    }
`

export const FooterLinkLine = styled.hr `
    size: 0.5;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 15px;
    width: 25%;

    @media screen and (max-width: 420px) {
        width: 100%;
    }
`
export const FooterContents = styled.p `
    color:#fff;
    text-decoration : none;
    text-align: left;
    margin-bottom: 0.5rem;
    font-size: 13.5px;
`
export const FooterContentsLink = styled.a `
    color:#fff;
    text-decoration : none;
    margin-bottom: 0.5rem;
    font-size: 13.5px;

    &:hover {
        color: #00adef;
        transition: 0.3s ease-out;
    }
`

export const SocialIcons = styled.div`
  display: flex;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  padding-right: 20px;
  border-bottom: 0.5px solid transparent;

  &:hover {
        color: #00adef;
        transition: 0.3s ease-out;
    } 
`

export const FooterForm = styled.div `
   
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: right;
    width: 100%;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
        margin-top: 25px;
    }
`

export const FormInput = styled.input`
    margin-top: 15px;
    border-radius: 2px;
    padding: 10px;
    outline: none;
    border: none;
    font-size: 13.5px;
    border: 1px solid #f6f6f6;
    width: 100%;
    
    
    &::placeholder {
    color: #8e8e8e;
    }
    
    @media screen and (max-width: 820px) {
    width: 100%;
    margin-top: 5px;
    }
`

export const FormButton = styled.button`
    margin-top: 15px;
    border-radius: 2px;
    background: #DC143C;
    white-space: nowrap;
    padding: 10px 25px;
    color: #fff;
    font-size: 13.5px;
    outline: none;
    border: 2px solid #DC143C;
    cursor: pointer;
    margin-right: 0;

    &:hover {
        transition: all 0.3s ease-out;
        background: #8B0000;
        border: 2px solid #8B0000;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export const FooterBottom = styled.div `
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const FooterSubscription = styled.section `
    display: flex;
    margin-bottom: 24px;
    margin-right: 5px;
    color:#fff;
    float: right;

`
export const FooterLanguage = styled.p `
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-bottom: 15px;
    font-size: 13.5px;
    line-height: 76px;
    padding: 10px;
    word-break: keep-all;
    vertical-align: middle;
    cursor: pointer;

    &:hover {
        color: #00adef;
        transition: 0.3s ease-out;
    }

    @media screen and (max-width: 820px) {
        line-height: 51px;
    }
`

export const FooterLogoWrapper = styled.div `
    max-width: 130px;
    display: flex;
    justify-content: flex-start;
    float: left;
    margin: 16px 0;
`

export const FooterLogoImage = styled.img `
    
    padding-right: 0;
    border: 0;
    max-height: 32px;
    max-width: 81px;
    vertical-align: middle;
    display: inline-block;

    @media screen and (max-width: 420px) {
        padding: 10px;
        max-height: 50px;
        max-width: 110px;
    }
    
`

export const FooterLogoImageCopyright = styled.p `
    font-size:10px;
    line-height: 10px;
    color: #808080;

    @media screen and (max-width: 820px) {
        font-size: 7px;
    }
`

export const IconSpan = styled.span `
    word-spacing: nowrap; 
    display: inline-block;

    svg {
        height: 1.7rem; 
        width: 1.7rem; 
        position: relative;
        fill: #FFF;
        
        &:hover{
            fill: #00adef;
            transition: 0.3s ease-out;
        } 

    }
`