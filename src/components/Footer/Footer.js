import { useTranslation } from 'react-i18next';
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, FooterDiv, FooterLinksContainer, FooterLinkWrapper, FooterLinksItems,FooterLinkTitle, FooterContents,
        FooterBottom, FooterLogoWrapper, FooterLogoImage, FooterLogoImageCopyright, SocialIcons, SocialIconLink } from './Footer.element'


const Footer = () => {

    const { t } = useTranslation();

    return (
        <FooterContainer>
            <FooterDiv>
                <FooterLinksContainer>
                    <FooterLinkWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>{t('Footer.ContactUs')}</FooterLinkTitle>
                            <FooterContents>{t('Footer.ContactUs1')}</FooterContents>
                            <FooterContents>{t('Footer.ContactUs2')}</FooterContents>
                            <FooterContents>{t('Footer.ContactUs3')}</FooterContents>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>{t('Footer.VisitUs')}</FooterLinkTitle>
                            <SocialIcons>
                                <SocialIconLink href='https://www.facebook.com/ibmkorea' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href='https://www.instagram.com/ibm' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href='https://www.youtube.com/user/SmarterPlanetTV' target='_blank' aria-label='Youtube'>
                                <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href='https://twitter.com/ibm' target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href='https://www.linkedin.com/company/ibm/' target='_blank' aria-label='LinkedIn'>
                                <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </FooterLinksItems>
                    </FooterLinkWrapper>
                    
                </FooterLinksContainer>
                <FooterBottom>
                    <FooterLogoWrapper>
                        <FooterLogoImage src={require('../../images/ibm.png').default} alt='ibm' />
                    </FooterLogoWrapper>
                </FooterBottom>
            </FooterDiv>
        </FooterContainer>
    )
}

export default Footer
