import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import React from 'react'
import { BsNewspaper } from 'react-icons/bs'
import { FooterContainer, FooterDiv, FooterSubscription , FooterLanguage, FooterLinkLine, FormInput, FormButton, FooterForm,
        FooterLinksContainer, FooterLinkWrapper, FooterLinksItems,FooterLinkTitle, FooterContents, FooterContentsLink,
        SocialIcons, SocialIconLink, FooterBottom, FooterLogoWrapper, FooterLogoImage, FooterLogoImageCopyright } from './Footer.element'


const Footer = () => {

    const { t, i18n } = useTranslation();

    useEffect(
        () => {
            window.scrollTo(0, 0);
        },
        []
    );

    return (
        <FooterContainer>
            <FooterDiv>
                <FooterLinksContainer>
                    <FooterLinkWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>{t('Footer.ContactUs')}</FooterLinkTitle>
                            <FooterLinkLine></FooterLinkLine>
                            <FooterContents>{t('Footer.ContactUs1')}</FooterContents>
                            <FooterContents>{t('Footer.ContactUs2')}</FooterContents>
                            <FooterContents>{t('Footer.ContactUs3')}</FooterContents>
                        </FooterLinksItems>
                        
                    </FooterLinkWrapper>
                </FooterLinksContainer>
                <FooterBottom>
                    <FooterLogoWrapper>
                        <div>
                        <FooterLogoImage src={require('../../images/ibm.png').default} alt='ibm' />
                        <FooterLogoImageCopyright>Copyright © 2021 IBM Korea</FooterLogoImageCopyright>
                        </div>
                        
                    </FooterLogoWrapper>
                </FooterBottom>
            </FooterDiv>
        </FooterContainer>
    )
}

export default Footer
