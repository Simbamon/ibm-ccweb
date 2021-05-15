import React, { useState } from 'react'
import { BackgroundSection, MainFlexbox, Flexbox1, ButtonBox, SummaryBox, Flexbox2, StepTitle, Container,
         SummaryTitle, SummaryDescription, Picture, ExampleButton } from './InfoSection2.element'
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade'

const InfoSection2 = () => {
    const { t } = useTranslation();
    
    const [TechState, setTechState] = useState({
        intro: t('DigitalJourney.DAIIntro'),
        config: t('DigitalJourney.DAIConfig'),
        guide: t('DigitalJourney.DAIGuide'),

    })

    const intro = TechState.intro
    const config = TechState.config
    const guide = TechState.guide

    function changeText1() {
        setTechState({
            intro: t('DigitalJourney.DAIIntro'),
            config: t('DigitalJourney.DAIConfig'),
            guide: t('DigitalJourney.DAIGuide'),
        })
    }

    function changeText2() {
        setTechState({
            intro: 'asdfadsf',
            config: 'asfadsfasdf',
            guide: 'asdfadsfdsaf',
        })
    }
    
    return (
        <>
            <BackgroundSection>
                <Container>
                    
                <MainFlexbox>
                        <Flexbox1>
                            <StepTitle>Technology<br></br>Briefing</StepTitle>
                        </Flexbox1>
                        <Flexbox2>
                            <ButtonBox>
                                <ExampleButton onClick={changeText1}>Data <span>&#38;</span> AI Briefing</ExampleButton>
                                <ExampleButton onClick={changeText2}>Open Hybrid Cloud Briefing</ExampleButton>
                                <ExampleButton onClick={changeText1}>Cloud Native Tech Briefing</ExampleButton>
                          
                            </ButtonBox>
                            <SummaryBox>
                                <SummaryTitle>프로그램 소개</SummaryTitle>
                                <SummaryDescription>{intro}</SummaryDescription>
                            </SummaryBox>
                            <SummaryBox>
                                <SummaryTitle>프로그램 구성</SummaryTitle>
                                <SummaryDescription>{config}</SummaryDescription>
                                
                            </SummaryBox>
                            <SummaryBox>
                                <SummaryTitle>프로그램 안내</SummaryTitle>
                                <SummaryDescription>{guide}</SummaryDescription>
                            </SummaryBox>
                            <SummaryBox>
                                <Picture src={require('../../images/5.jpg').default} alt='japan'/>
                            </SummaryBox>
                        </Flexbox2>
                    </MainFlexbox>
                    
                </Container>
                    
            </BackgroundSection>
            
        </>
    )
}

export default InfoSection2
