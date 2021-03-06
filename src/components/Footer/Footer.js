import { useTranslation } from 'react-i18next';
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr'
import { FooterContainer, FooterDiv, FooterLinksContainer, FooterLinkWrapper, FooterLinksItems,FooterLinkTitle, FooterContents,
        FooterBottom, FooterLogoWrapper, FooterLogoImage, SocialIcons, SocialIconLink, IconSpan } from './Footer.element'


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
                                <SocialIconLink href='https://m.blog.naver.com/PostList.naver?blogId=ibm_korea' target='_blank' aria-label='Facebook'>
                                    <IconSpan>
                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                            width="581.000000pt" height="488.000000pt" viewBox="0 0 581.000000 488.000000"
                                            preserveAspectRatio="xMidYMid meet">

                                            <g transform="translate(0.000000,488.000000) scale(0.100000,-0.100000)" stroke="none">
                                            <path d="M740 4860 c-47 -10 -107 -26 -135 -35 -237 -82 -458 -298 -544 -535
                                            -60 -165 -56 -68 -56 -1420 l0 -1235 23 -84 c78 -286 269 -509 532 -620 160
                                            -68 106 -64 955 -68 l770 -4 210 -342 c279 -454 296 -479 340 -500 65 -31 121
                                            -21 177 30 14 14 135 202 269 419 l243 393 760 3 c754 3 762 4 841 26 334 94
                                            574 343 663 690 16 62 17 163 17 1292 l0 1225 -23 85 c-89 336 -338 582 -686
                                            678 -56 15 -230 17 -2166 19 -2008 2 -2109 1 -2190 -17z m1342 -1150 c143 -44
                                            242 -151 299 -325 23 -69 24 -76 27 -612 l3 -543 -170 0 -170 0 -3 493 c-3
                                            485 -4 493 -26 549 -24 61 -79 118 -112 118 -19 0 -20 8 -20 175 l0 175 58 -6
                                            c31 -4 83 -15 114 -24z m-1092 -285 c0 -151 4 -275 8 -275 5 0 18 11 31 24 28
                                            30 114 73 182 91 195 52 406 -50 503 -243 136 -270 81 -576 -131 -728 -96 -69
                                            -189 -99 -308 -99 -108 0 -159 20 -235 91 l-50 47 0 -52 0 -51 -180 0 -180 0
                                            0 735 0 735 180 0 180 0 0 -275z m3622 -156 c65 -14 120 -41 176 -86 l42 -34
                                            0 45 0 46 170 0 170 0 0 -558 c0 -465 -3 -567 -15 -616 -63 -240 -239 -369
                                            -522 -383 l-113 -6 0 162 0 161 73 0 c160 1 237 84 237 257 l0 73 -52 -40
                                            c-75 -57 -152 -80 -262 -80 -154 0 -259 42 -346 137 -184 202 -186 588 -4 783
                                            103 110 297 170 446 139z m-1127 -27 c190 -65 306 -197 351 -400 19 -85 15
                                            -204 -10 -283 -66 -213 -275 -353 -546 -366 -201 -10 -354 40 -466 151 -186
                                            186 -206 518 -44 721 67 84 199 162 323 190 93 21 313 14 392 -13z"/>
                                            <path d="M1115 2933 c-170 -89 -172 -323 -2 -408 115 -57 255 -7 308 110 49
                                            107 1 243 -104 294 -53 26 -157 28 -202 4z"/>
                                            <path d="M4512 2929 c-136 -68 -162 -249 -52 -359 74 -74 166 -90 259 -44 169
                                            84 168 318 -1 405 -52 27 -149 26 -206 -2z"/>
                                            <path d="M3190 2947 c-64 -18 -115 -60 -145 -120 -45 -91 -29 -184 45 -258
                                            181 -181 475 32 360 261 -49 95 -159 144 -260 117z"/>
                                            </g>
                                        </svg>
                                    </IconSpan>
                                    
                                </SocialIconLink>
                                <SocialIconLink href='https://www.linkedin.com/company/ibm/' target='_blank' aria-label='LinkedIn'>
                                    <GrLinkedinOption />
                                </SocialIconLink>
                                <SocialIconLink href='https://www.youtube.com/user/SmarterPlanetTV' target='_blank' aria-label='Youtube'>
                                <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href='https://www.instagram.com/ibm' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href='https://twitter.com/ibm' target='_blank' aria-label='Twitter'>
                                <FaTwitter />
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


