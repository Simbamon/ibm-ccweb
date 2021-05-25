import React, { useState } from 'react'
import { CardSection, CardsWrapper, CardsContainer, TitleCard, Cards, CardInfo, 
         CardTitle, CardSubHeading, CardHidden} from './CardsSection.element'
import Fade from 'react-reveal/Fade'
import { useTranslation } from 'react-i18next'

const CardsSection = () => {
    const { t } = useTranslation();   
    return (
        <>
            <CardSection>
                <CardsWrapper>
                    <CardsContainer>
                    

                        <Cards to='/' img = {"https://380342-1192392-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/08/briefing-no-desenvolvimento-de-projetos-696x464.jpg"}>
                            <Fade>
                            <TitleCard>Technology Briefing</TitleCard>
                            <CardInfo>
                                <CardTitle>기술 브리핑</CardTitle>
                                <CardHidden>
                                    <CardSubHeading>Data and AI, Hybrid Cloud<br></br>트렌드 및 기술을 이해해 보세요!</CardSubHeading>
                                </CardHidden>
                                
                            </CardInfo>
                            </Fade>
                        </Cards>

                        <Cards to='/' img = {"https://cdn.techinasia.com/wp-content/uploads/2016/03/mox-demo-day-2016-a-crowd.jpg"}>
                            <Fade>
                            <TitleCard style={{background: "blue"}}>Experience Day</TitleCard>
                            <CardInfo>
                                <CardTitle>핸즈온 세션</CardTitle>
                                <CardHidden>
                                    <CardSubHeading>자료로만 익혔던 기술,<br></br> 이젠 당신의 손으로 직접 경험해 보세요!</CardSubHeading>
                                </CardHidden>
                            </CardInfo>
                            </Fade>
                        </Cards>
                           
                        
                       
                        <Cards img = {"https://i.pinimg.com/originals/5a/0b/d7/5a0bd7df42e79dc2ce5024a9d6d67da7.jpg"}>
                            <Fade>
                            <TitleCard style={{background: "#d12772"}}>Discovery Workshop</TitleCard>
                            <CardInfo>
                                <CardTitle>워크샵</CardTitle>
                                <CardHidden>
                                    <CardSubHeading>비지니스 고민, 전문가와 함께 해결방안을 찾아보세요!</CardSubHeading>
                                    {/* <CardSubHeading>{t('Cards.CardSubHeading3')}</CardSubHeading> */}
                                </CardHidden>
                            </CardInfo>
                            </Fade>
                        </Cards>
                    

                        {/* <Card img = {"https://cdn.techinasia.com/wp-content/uploads/2016/03/mox-demo-day-2016-a-crowd.jpg"}>
                            <Fade>
                            <CardInfo>
                                <CardTitle>EXPERIENCE<br></br>DAY</CardTitle>
                                <CardHidden>
                                <CardImg src={require('../../images/japan.svg').default} alt='japan'/>
                                <CardSubHeading>{t('Cards.CardSubHeading2')}</CardSubHeading>
                                </CardHidden>
                            </CardInfo>
                            </Fade>
                        </Card> */}
                        {/* <Card img = {"https://i.pinimg.com/originals/5a/0b/d7/5a0bd7df42e79dc2ce5024a9d6d67da7.jpg"}>
                            <Fade>
                            <CardInfo>
                                <CardTitle>DISCOVERY<br></br>WORKSHOP</CardTitle>
                                <CardHidden>
                                <CardImg src={require('../../images/blog.svg').default} alt='ibm'/>
                                <CardSubHeading>{t('Cards.CardSubHeading3')}</CardSubHeading>
                                </CardHidden>
                            </CardInfo>
                            </Fade>
                        </Card> */}
                    </CardsContainer>
                </CardsWrapper>
            </CardSection>
        </>
    )
}

export default CardsSection
