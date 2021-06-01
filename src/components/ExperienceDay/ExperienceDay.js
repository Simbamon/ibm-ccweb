import React, { useState } from 'react'
import { BackgroundSection, MainFlexbox, Flexbox1, ButtonBox, SummaryBoxContainer, SummaryBox, SummaryTitleBox, Flexbox2, StepTitle, StepSubTitle,
         Container, SummaryTitle, SummaryDescription, SummaryDescriptionHash, Picture, ExampleButton, GoBack, Arrow } from './ExperienceDay.element'
import { useTranslation } from 'react-i18next';
import { Link } from "react-scroll";

const ExperienceDay = () => {
    const { t } = useTranslation();

    const [State, setState] = useState({
        taIntro: t('DigitalJourney.DSIntro'),
        taHashtag: t('DigitalJourney.DSHashtag'),
        taConfig: <ul>
                    <li>효과적인 데이터 소스 관리를 위한 가상화 방법 알아보기</li>
                    <li>필요한 데이터를 좀 더 쉽게 찾아보자!  카탈로그 사용법 익히기</li>
                    <li>딱 맞는 머신러닝 모델, 쉽고 빠르게 개발하고 적용해 보기</li>
                    <li>머신 러닝 모델은 믿을 수 있을까?  신뢰도 평가하고 관리하기</li>
                </ul>,
        taGuide: <ul>
                    <li>대상: 데이터 엔지니어, 데이터 사이언티스트, 데이터 아키텍트, 데이터를 활용하는 앱 개발자 등 머신 러닝 및 AI 에 관심있는 누구나 가능</li>
                    <li>소요 시간: 1일</li>
                </ul>,
    })

    const [clicked, setClicked] = useState({
        dsClicked: true,
        wdClicked: false,
        amClicked: false,
    })


    const taIntro = State.taIntro
    const taConfig = State.taConfig
    const taGuide = State.taGuide
    const taHashtag = State.taHashtag
    const dsClicked = clicked.dsClicked
    const wdClicked = clicked.wdClicked
    const amClicked = clicked.amClicked

    function changeDS() {
        setState({
            taIntro: t('DigitalJourney.DSIntro'),
            taHashtag: t('DigitalJourney.DSHashtag'),
            taConfig: <ul>
                        <li>효과적인 데이터 소스 관리를 위한 가상화 방법 알아보기</li>
                        <li>필요한 데이터를 좀 더 쉽게 찾아보자!  카탈로그 사용법 익히기</li>
                        <li>딱 맞는 머신러닝 모델, 쉽고 빠르게 개발하고 적용해 보기</li>
                        <li>머신 러닝 모델은 믿을 수 있을까?  신뢰도 평가하고 관리하기</li>
                    </ul>,
            taGuide: <ul>
                        <li>대상: 데이터 엔지니어, 데이터 사이언티스트, 데이터 아키텍트, 데이터를 활용하는 앱 개발자 등 머신 러닝 및 AI 에 관심있는 누구나 가능</li>
                        <li>소요 시간: 1일</li>
                    </ul>,
        })
        setClicked({ 
            dsClicked: true,
            wdClicked: false,
            amClicked: false,
        });
    }

    function changeWD() {
        setState({
            taIntro: <p>콜 로그 분석,  마켓 분석,  고객 요구 분석,  기술 문서 분석을 위해 수집된 데이터의 공통점은?<br></br>
            바로 <span style={{color: "#0062FF", fontWeight: "600"}}>비정형 데이터</span> 라는 점 입니다. 어렵지 않은 비정형 데이터의 분석을 직접 경험해 보세요.</p>,
            taHashtag: t('DigitalJourney.WDHashtag'),
            taConfig: <ul>
                        <li>비정형 데이터 분석의 기본 개념 살펴 보기</li>
                        <li>효율적인 데이터 분석, 사례로 이해해 보기</li>
                        <li>분석의 기반 기술 및 플랫폼에 대해 알아 보기</li>
                        <li>실습을 통해 분석 과정과 결과 알아 보기</li>
                    </ul>,
            taGuide: <ul>
                        <li>대상: 비정형 데이터를 다루는 현업, IT 팀, 앱 개발자, 아키텍트 등</li>
                        <li>소요 시간: 4시간</li>
                    </ul>,
        })
        setClicked({ 
            dsClicked: false,
            wdClicked: true,
            amClicked: false,
        });
    }

    function changeAM() {
        setState({
            taIntro: t('DigitalJourney.AMIntro'),
            taHashtag: t('DigitalJourney.AMHashtag'),
            taConfig: <ul>
                        <li>앱 현대화란 무엇인가 알아보기</li>
                        <li>앱 현대화의 기반 기술 이해해 보기</li>
                        <li>앱 현대화를 위한 쉽고 빠른 가이드 솔루션 경험해 보기</li>
                    </ul>,
            taGuide: <ul>
                        <li>대상: IT 담당자, 전략 기획 담당자, 프로젝트 매니저, 앱 개발자 등</li>
                        <li>소요 시간: 1일</li>
                    </ul>,
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
                                <ExampleButton onClick={changeDS} className={dsClicked ? 'active': ''}>Data Science Exp. Day</ExampleButton>
                                <ExampleButton onClick={changeWD} className={wdClicked ? 'active' : ''}>Watson Discovery Exp. Day</ExampleButton>
                                <ExampleButton onClick={changeAM} className={amClicked ? 'active' : ''}>App Modernization Exp. Day</ExampleButton>
                            </ButtonBox>
                            <SummaryTitleBox>
                                <SummaryDescription >{taIntro}</SummaryDescription>
                                <SummaryDescriptionHash>{taHashtag}</SummaryDescriptionHash>
                            </SummaryTitleBox>
                            <div style={{minWidth: "100%"}}>
                                <SummaryBoxContainer>
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
                                </SummaryBoxContainer>
                            </div>
                        </Flexbox2>
                        <Flexbox1>
                            <StepTitle>Experience Day</StepTitle>
                            <StepSubTitle>핸즈온 세션</StepSubTitle>
                            <Picture src={require('../../images/edpic.png').default} alt='handson'/>
                        </Flexbox1>
                        <div style={{width: "100%"}}>
                            <GoBack>
                                <Link
                                    activeClass="active"
                                    to="main"
                                    spy={true}
                                    smooth={true}
                                    offset={-120}
                                    duration={500}
                                >
                                <Arrow />다시 돌아가기
                                </Link>
                            </GoBack>
                        </div>
                    </MainFlexbox>
                </Container>
                    
            </BackgroundSection>
            
        </>
    )
}

export default ExperienceDay
