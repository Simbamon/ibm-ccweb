import React, { useState } from 'react'
import { BackgroundSection, MainFlexbox, Flexbox1, ButtonBox, SummaryBoxContainer, SummaryBox, SummaryTitleBox, Flexbox2, StepTitle, StepSubTitle,
         Container, SummaryTitle, SummaryDescription, SummaryDescriptionHash, Picture, ExampleButton } from './Discovery.element'
import { useTranslation } from 'react-i18next';
import Carousel from 'react-elastic-carousel'
import Fade from 'react-reveal/Fade'
import { render } from '@testing-library/react';

const Discovery = () => {
    const { t } = useTranslation();

    const [State, setState] = useState({
        taIntro: t('DigitalJourney.LAIIntro'),
        taHashtag: t('DigitalJourney.LAHashtag'),
        rendering: 
        <div style={{minWidth: "100%"}}>
                <SummaryBoxContainer>
                    <SummaryBox>
                        <SummaryTitle>프로그램 구성</SummaryTitle>
                        <SummaryDescription>
                            <div style={{display: "inline-block", textAlign: "left"}}>
                                <ul>
                                    <li>해결해야 할 과제들을 파악하고 최우선 과제 선정하기</li>
                                    <li>과제 수행에 필요한 데이터를 수집하고 선별하기</li>
                                    <li>데이터를 체계적으로 관리할 수 있는 방안 마련하기</li>
                                    <li>효율적인 머신 러닝을 위한 상위 레벨의 아키텍처 정의해 보기</li>
                                    <li>우선 순위에 따라 로드맵 설계해 보기</li>
                                </ul>,
                            </div>
                        </SummaryDescription>
                    </SummaryBox>
                    <SummaryBox>
                        <SummaryTitle>프로그램 안내</SummaryTitle>
                        <SummaryDescription>
                            <div style={{display: "inline-block", textAlign: "left"}}>
                            <ul>
                                <li>대상: 비즈니스에 머신러닝 및 AI를 적용하고자 하는 고객사 임원, 현업 리더, IT 리더, CDO 등</li>
                                <li>소요 시간: 1일 (협의 필요)</li>
                            </ul>
                            </div>        
                        </SummaryDescription>
                    </SummaryBox>
                </SummaryBoxContainer>
            </div>

    })

    const [clicked, setClicked] = useState({
        lclicked: true,
        gClicked: false,
    })


    const taIntro = State.taIntro
    const taHashtag = State.taHashtag
    const rendering = State.rendering
    const lclicked = clicked.lclicked
    const gClicked = clicked.gClicked

    function changeLA() {
        setState({
            taIntro: t('DigitalJourney.LAIIntro'),
            taHashtag: t('DigitalJourney.LAHashtag'),
            rendering:
            <div style={{minWidth: "100%"}}>
                <SummaryBoxContainer>
                    <SummaryBox>
                        <SummaryTitle>프로그램 구성</SummaryTitle>
                        <SummaryDescription>
                            <div style={{display: "inline-block", textAlign: "left"}}>
                                <ul>
                                    <li>해결해야 할 과제들을 파악하고 최우선 과제 선정하기</li>
                                    <li>과제 수행에 필요한 데이터를 수집하고 선별하기</li>
                                    <li>데이터를 체계적으로 관리할 수 있는 방안 마련하기</li>
                                    <li>효율적인 머신 러닝을 위한 상위 레벨의 아키텍처 정의해 보기</li>
                                    <li>우선 순위에 따라 로드맵 설계해 보기</li>
                                </ul>,
                            </div>
                        </SummaryDescription>
                    </SummaryBox>
                    <SummaryBox>
                        <SummaryTitle>프로그램 안내</SummaryTitle>
                        <SummaryDescription>
                            <div style={{display: "inline-block", textAlign: "left"}}>
                            <ul>
                                <li>대상: 비즈니스에 머신러닝 및 AI를 적용하고자 하는 고객사 임원, 현업 리더, IT 리더, CDO 등</li>
                                <li>소요 시간: 1일 (협의 필요)</li>
                            </ul>
                            </div>        
                        </SummaryDescription>
                    </SummaryBox>
                </SummaryBoxContainer>
            </div>
        })
        setClicked({
            lclicked: true,
            gClicked: false,
        })
    }

    function changeOH() {
        setState({
            taIntro: <p>민첩성을 갖춘 <span style={{color: "#D12765", fontWeight: "600"}}>초고속</span>, 복잡하지만 연결된 시스템을 갖춘 <span style={{color: "#D12765", fontWeight: "600"}}>초연결</span>, 빠르게 확장 가능한 <span style={{color: "#D12765", fontWeight: "600"}}>초규모</span><br></br>  
            디지털 네이티브 기반의 미래 기업이 갖추어야 할 특징입니다. 여러분은 어떻게 준비하고 있나요?<br></br>IBM Garage를 통해 기본 역량을 여러분의 것으로 만들어 보세요. 
            </p>,
            taHashtag: t('DigitalJourney.GAHashtag'),
            rendering: 
            <div style={{minWidth: "100%"}}>
                <SummaryBoxContainer>
                    <SummaryBox>
                        <SummaryTitle>프로그램 구성 및 안내</SummaryTitle>
                        <SummaryDescription>
                            <div style={{display: "inline-block", textAlign: "left"}}>
                                asdf
                            </div>
                        </SummaryDescription>
                    </SummaryBox>
                </SummaryBoxContainer>
            </div>
        })
        setClicked({
            lclicked: false,
            gClicked: true,
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
                                <ExampleButton onClick={changeLA} className={lclicked ? 'active': ''}>Ladder to AI Workshop</ExampleButton>
                                <ExampleButton onClick={changeOH} className={gClicked ? 'active': ''}>Garage (유료)</ExampleButton>
                            </ButtonBox>
                            <SummaryTitleBox>
                                <SummaryDescription >{taIntro}</SummaryDescription>
                                <SummaryDescriptionHash >{taHashtag}</SummaryDescriptionHash>
                            </SummaryTitleBox>
                            {rendering}
                        </Flexbox2>
                    </MainFlexbox>
                </Container>
                    
            </BackgroundSection>
            
        </>
    )
}

export default Discovery
