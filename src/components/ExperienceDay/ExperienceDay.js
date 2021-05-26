import React, { useState } from 'react'
import { BackgroundSection, MainFlexbox, Flexbox1, ButtonBox, SummaryBox, SummaryTitleBox, Flexbox2, StepTitle, StepSubTitle,
         Container, SummaryTitle, SummaryDescription, Picture, ExampleButton } from './ExperienceDay.element'
import { useTranslation } from 'react-i18next';
import Carousel from 'react-elastic-carousel'
import Fade from 'react-reveal/Fade'

const ExperienceDay = () => {
    const { t } = useTranslation();

    const [State, setState] = useState({
        taIntro: t('DigitalJourney.DAIIntro'),
        taConfig: t('DigitalJourney.DAIConfig'),
        taGuide: t('DigitalJourney.DAIGuide'),

    })

    const [clicked, setClicked] = useState({
        dsClicked: true,
        wdClicked: false,
        amClicked: false,
    })


    const taIntro = State.taIntro
    const taConfig = State.taConfig
    const taGuide = State.taGuide
    const dsClicked = clicked.dsClicked
    const wdClicked = clicked.wdClicked
    const amClicked = clicked.amClicked

    function changeDA(e) {
        setState({
            taIntro: t('DigitalJourney.DAIIntro'),
            taConfig: t('DigitalJourney.DAIConfig'),
            taGuide: t('DigitalJourney.DAIGuide'),
        })
        setClicked({ 
            dsClicked: true,
            wdClicked: false,
            amClicked: false,
        });
    }

    function changeOH() {
        setState({
            taIntro: t('DigitalJourney.OHIntro'),
            taConfig: t('DigitalJourney.OHConfig'),
            taGuide: t('DigitalJourney.OHGuide'),
        })
        setClicked({ 
            dsClicked: false,
            wdClicked: true,
            amClicked: false,
        });
    }

    function changeCN() {
        setState({
            taIntro: t('DigitalJourney.CNIntro'),
            taConfig: t('DigitalJourney.CNConfig'),
            taGuide: t('DigitalJourney.CNGuide'),
        })
        setClicked({ 
            dsClicked: false,
            wdClicked: false,
            amClicked: true,
        });
    }

    
    return (
        <>
            <BackgroundSection id="ed">
                <Container>
                    <MainFlexbox>                     
                        <Flexbox2>
                            <ButtonBox>
                                <ExampleButton onClick={changeDA} className={dsClicked ? 'active': ''}>Data Science</ExampleButton>
                                <ExampleButton onClick={changeOH} className={wdClicked ? 'active' : ''}>Watson Discovery</ExampleButton>
                                <ExampleButton onClick={changeCN} className={amClicked ? 'active' : ''}>Application Modernization</ExampleButton>
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
                        <Flexbox1>
                            <StepTitle>Experience Day</StepTitle>
                            <StepSubTitle>핸즈온 세션</StepSubTitle>
                            <Picture src={require('../../images/edpic.png').default} alt='handson'/>
                        </Flexbox1>
                    </MainFlexbox>
                </Container>
                    
            </BackgroundSection>
            
        </>
    )
}

export default ExperienceDay
