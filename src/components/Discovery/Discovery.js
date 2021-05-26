import React, { useState } from 'react'
import { BackgroundSection, MainFlexbox, Flexbox1, ButtonBox, SummaryBox, SummaryTitleBox, Flexbox2, StepTitle, StepSubTitle,
         Container, SummaryTitle, SummaryDescription, Picture, ExampleButton } from './Discovery.element'
import { useTranslation } from 'react-i18next';
import Carousel from 'react-elastic-carousel'
import Fade from 'react-reveal/Fade'

const Discovery = () => {
    const { t } = useTranslation();

    const [State, setState] = useState({
        taIntro: t('DigitalJourney.DAIIntro'),
        taConfig: t('DigitalJourney.DAIConfig'),
        taGuide: t('DigitalJourney.DAIGuide'),

    })

    const taIntro = State.taIntro
    const taConfig = State.taConfig
    const taGuide = State.taGuide

    function changeDA() {
        setState({
            taIntro: t('DigitalJourney.DAIIntro'),
            taConfig: t('DigitalJourney.DAIConfig'),
            taGuide: t('DigitalJourney.DAIGuide'),
        })
    }

    function changeOH() {
        setState({
            taIntro: t('DigitalJourney.OHIntro'),
            taConfig: t('DigitalJourney.OHConfig'),
            taGuide: t('DigitalJourney.OHGuide'),
        })
    }

    
    return (
        <>
            <BackgroundSection id="dw">
                <Container>
                    <MainFlexbox>
                        <Flexbox1>
                            <StepTitle>Discovery Workshop</StepTitle>
                            <StepSubTitle>워크샵</StepSubTitle>
                            <Picture src={require('../../images/dwpic.png').default} alt='japan'/>
                        </Flexbox1>
                        <Flexbox2>
                            <ButtonBox>
                                <ExampleButton onClick={changeDA}>Ladder to AI Workshop</ExampleButton>
                                <ExampleButton onClick={changeOH}>Garage (유로)</ExampleButton>
                            </ButtonBox>
                            <SummaryTitleBox>
                                <SummaryDescription >{taIntro}</SummaryDescription>
                            </SummaryTitleBox>
                            <SummaryBox>
                                <SummaryTitle>프로그램 구성</SummaryTitle>
                                <SummaryDescription>
                                    <div style={{display: "inline-block", textAlign: "left"}}>
                                        {taConfig}
                                    </div>
                                </SummaryDescription>
                            </SummaryBox>
                            <SummaryBox>
                                <SummaryTitle>프로그램 안내</SummaryTitle>
                                <SummaryDescription>
                                    <div style={{display: "inline-block", textAlign: "left"}}>
                                        {taGuide}
                                    </div>        
                                </SummaryDescription>
                            </SummaryBox>
                        </Flexbox2>
                    </MainFlexbox>
                </Container>
                    
            </BackgroundSection>
            
        </>
    )
}

export default Discovery
