import { useTranslation } from 'react-i18next';
import React from 'react'
import { FooterContainer, FooterDiv, FooterLinkLine, FooterLinksContainer, FooterLinkWrapper, FooterLinksItems,FooterLinkTitle, FooterContents,
        FooterBottom, FooterLogoWrapper, FooterLogoImage, FooterLogoImageCopyright } from './Footer.element'


const Footer = () => {

    const { t } = useTranslation();

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
