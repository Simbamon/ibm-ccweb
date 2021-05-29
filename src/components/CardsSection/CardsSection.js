import React from 'react'
import { CardSection, CardsWrapper, CardsContainer, TitleCard, Cards, CardInfo, 
         CardTitle, CardSubHeading, CardHidden} from './CardsSection.element'
import Fade from 'react-reveal/Fade'
import { Link } from "react-scroll";

const CardsSection = () => {
    return (
        <>
            <CardSection>
                <CardsWrapper>
                    <CardsContainer>
                    
                        
                            <Cards img = {require('../../images/tb.jpg').default} alt='techonology briefing'>
                                <Link
                                    activeClass="active"
                                    to="tb"
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                >
                                <Fade>
                                <TitleCard>Technology Briefing</TitleCard>
                                <CardInfo>
                                    <CardTitle>기술 브리핑</CardTitle>
                                    <CardHidden>
                                        <CardSubHeading>Data and AI, Hybrid Cloud<br></br>트렌드 및 기술을 이해해 보세요!</CardSubHeading>
                                    </CardHidden>
                                    
                                </CardInfo>
                                </Fade>
                                </Link>
                            </Cards>
                        
                        
                        <Cards img = {require('../../images/ed.jpg').default} alt='experience day'>
                            <Link
                                activeClass="active"
                                to="ed"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                            >
                            <Fade>
                            <TitleCard style={{background: "#0062FF"}}>Experience Day</TitleCard>
                            <CardInfo>
                                <CardTitle>핸즈온 세션</CardTitle>
                                <CardHidden>
                                    <CardSubHeading>자료로만 익혔던 기술,<br></br> 이젠 당신의 손으로 직접 경험해 보세요!</CardSubHeading>
                                </CardHidden>
                            </CardInfo>
                            </Fade>
                            </Link>
                        </Cards>
                           
                        
                       
                        <Cards img = {require('../../images/dw.jpg').default} alt='discovery workshop'>
                            <Link
                                activeClass="active"
                                to="dw"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                            >
                            <Fade>
                            <TitleCard style={{background: "#D12765"}}>Discovery Workshop</TitleCard>
                            <CardInfo>
                                <CardTitle>워크샵</CardTitle>
                                <CardHidden>
                                    <CardSubHeading>비지니스 고민, 전문가와 함께<br></br> 해결방안을 찾아보세요!</CardSubHeading>
                                    {/* <CardSubHeading>{t('Cards.CardSubHeading3')}</CardSubHeading> */}
                                </CardHidden>
                            </CardInfo>
                            </Fade>
                            </Link>
                        </Cards>
                    </CardsContainer>
                </CardsWrapper>
            </CardSection>
        </>
    )
}

export default CardsSection
