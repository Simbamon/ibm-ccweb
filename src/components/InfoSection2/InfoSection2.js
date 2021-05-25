import React, { useState } from 'react'
import { BackgroundSection, MainFlexbox, Flexbox1, ButtonBox, SummaryBox, Flexbox2, StepTitle, Container,
         SummaryTitle, SummaryDescription, Picture, ExampleButton } from './InfoSection2.element'
import { useTranslation } from 'react-i18next';
import Carousel from 'react-elastic-carousel'
import Fade from 'react-reveal/Fade'

const InfoSection2 = () => {
    const { t } = useTranslation();

    const [State, setState] = useState({
        taIntro: t('DigitalJourney.DAIIntro'),
        taConfig: t('DigitalJourney.DAIConfig'),
        taGuide: t('DigitalJourney.DAIGuide'),
        edIntro: t('DigitalJourney.DSIntro'),
        edConfig: t('DigitalJourney.DSConfig'),
        edGuide: t('DigitalJourney.DSGuide'),

    })

    const taIntro = State.taIntro
    const taConfig = State.taConfig
    const taGuide = State.taGuide
    const edIntro = State.edIntro
    const edConfig = State.edConfig
    const edGuide = State.edGuide

    function changeDA() {
        setState({
            taIntro: t('DigitalJourney.DAIIntro'),
            taConfig: t('DigitalJourney.DAIConfig'),
            taGuide: t('DigitalJourney.DAIGuide'),
            edIntro: t('DigitalJourney.DSIntro'),
            edConfig: t('DigitalJourney.DSConfig'),
            edGuide: t('DigitalJourney.DSGuide'),
        })
    }

    function changeOH() {
        setState({
            taIntro: t('DigitalJourney.OHIntro'),
            taConfig: t('DigitalJourney.OHConfig'),
            taGuide: t('DigitalJourney.OHGuide'),
            edIntro: t('DigitalJourney.DSIntro'),
            edConfig: t('DigitalJourney.DSConfig'),
            edGuide: t('DigitalJourney.DSGuide'),
        })
    }

    function changeCN() {
        setState({
            taIntro: t('DigitalJourney.CNIntro'),
            taConfig: t('DigitalJourney.CNConfig'),
            taGuide: t('DigitalJourney.CNGuide'),
            edIntro: t('DigitalJourney.DSIntro'),
            edConfig: t('DigitalJourney.DSConfig'),
            edGuide: t('DigitalJourney.DSGuide'),
        })
    }

    function changeDS() {
        setState({
            taIntro: t('DigitalJourney.CNIntro'),
            taConfig: t('DigitalJourney.CNConfig'),
            taGuide: t('DigitalJourney.CNGuide'),
            edIntro: t('DigitalJourney.DSIntro'),
            edConfig: t('DigitalJourney.DSConfig'),
            edGuide: t('DigitalJourney.DSGuide'),
        })
    }

    function changeWD() {
        setState({
            taIntro: t('DigitalJourney.CNIntro'),
            taConfig: t('DigitalJourney.CNConfig'),
            taGuide: t('DigitalJourney.CNGuide'),
            edIntro: t('DigitalJourney.WDIntro'),
            edConfig: t('DigitalJourney.WDConfig'),
            edGuide: t('DigitalJourney.WDGuide'),
        })
    }

    function changeAM() {
        setState({
            taIntro: t('DigitalJourney.CNIntro'),
            taConfig: t('DigitalJourney.CNConfig'),
            taGuide: t('DigitalJourney.CNGuide'),
            edIntro: t('DigitalJourney.AMIntro'),
            edConfig: t('DigitalJourney.AMConfig'),
            edGuide: t('DigitalJourney.AMGuide'),
        })
    }
    
    return (
        <>
            <BackgroundSection>
                <Container>
                <Carousel>
                    <MainFlexbox>
                        <Flexbox1>
                            <StepTitle>Technology Briefing</StepTitle>
                        </Flexbox1>
                        <Flexbox2>
                            <ButtonBox>
                                <ExampleButton onClick={changeDA}>Data <span>&#38;</span> AI Briefing</ExampleButton>
                                <ExampleButton onClick={changeOH}>Open Hybrid Cloud Briefing</ExampleButton>
                                <ExampleButton onClick={changeCN}>Cloud Native Tech Briefing</ExampleButton>
                            </ButtonBox>
                            <SummaryBox>
                                <SummaryTitle>프로그램 소개</SummaryTitle>
                                <SummaryDescription>{taIntro}</SummaryDescription>
                            </SummaryBox>
                            <SummaryBox>
                                <SummaryTitle>프로그램 구성</SummaryTitle>
                                <SummaryDescription>{taConfig}</SummaryDescription>
                                
                            </SummaryBox>
                            <SummaryBox>
                                <SummaryTitle>프로그램 안내</SummaryTitle>
                                <SummaryDescription>{taGuide}</SummaryDescription>
                            </SummaryBox>
                            <SummaryBox>
                                <Picture src={require('../../images/5.jpg').default} alt='japan'/>
                            </SummaryBox>
                        </Flexbox2>
                    </MainFlexbox>

                    <MainFlexbox>
                        <Flexbox1>
                            <StepTitle>Experience Day</StepTitle>
                        </Flexbox1>
                        <Flexbox2>
                            <ButtonBox>
                                <ExampleButton onClick={changeDS}>Data Science</ExampleButton>
                                <ExampleButton onClick={changeWD}>Watson Discovery </ExampleButton>
                                <ExampleButton onClick={changeAM}>App Modernization</ExampleButton>
                          
                            </ButtonBox>
                            <SummaryBox>
                                <SummaryTitle>프로그램 소개</SummaryTitle>
                                <SummaryDescription>{edIntro}</SummaryDescription>
                            </SummaryBox>
                            <SummaryBox>
                                <SummaryTitle>프로그램 구성</SummaryTitle>
                                <SummaryDescription>{edConfig}</SummaryDescription>
                                
                            </SummaryBox>
                            <SummaryBox>
                                <SummaryTitle>프로그램 안내</SummaryTitle>
                                <SummaryDescription>{edGuide}</SummaryDescription>
                            </SummaryBox>
                            <SummaryBox>
                                <Picture src={require('../../images/5.jpg').default} alt='japan'/>
                            </SummaryBox>
                        </Flexbox2>
                    </MainFlexbox>
                
                </Carousel>    
 
                    
                </Container>
                    
            </BackgroundSection>
            
        </>
    )
}

export default InfoSection2
