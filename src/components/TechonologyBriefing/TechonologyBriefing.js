import React, { useState } from 'react'
import { BackgroundSection, MainFlexbox, Flexbox1, ButtonBox, SummaryBoxContainer, SummaryBox, SummaryTitleBox, Flexbox2, StepTitle, StepSubTitle,
         Container, SummaryTitle, SummaryDescription, SummaryDescriptionHash, Picture, ExampleButton, GoBack, Arrow } from './TechonologyBriefing.element'
import { useTranslation } from 'react-i18next';
import { Link } from "react-scroll";

const TechonologyBriefing = () => {
    const { t } = useTranslation();

    const [State, setState] = useState({
        taIntro: t('DigitalJourney.DAIIntro'),
        taConfig: <ul>
                    <li>마이크로 서비스 아키텍처가 무엇인가요?</li>
                    <li>기존 아키텍처와 마이크로 서비스 아키텍처 비교해 보기</li>
                    <li>마이크로 서비스 디자인의 기본 원리 이해하기 </li>
                    <li>클라우드 네이티브 앱 개발을 위한 개발 방법론 알아 보기 </li>
                </ul>,
        taGuide: <ul>
                    <li>대상 : 신규 사업 전략팀,  CxO, 현업 등 AI를 적용해 보고자 하는 관련 부서 , 담당자 모두 가능</li>
                    <li>소요 시간: 2시간</li>
                </ul>,
        taHashTag: t('DigitalJourney.DAHashtag'),

    })

    const [clicked, setClicked] = useState({
        daClicked: true,
        ohClicked: false,
        cnClicked: false,
    })

    const taIntro = State.taIntro
    const taConfig = State.taConfig
    const taGuide = State.taGuide
    const taHashTag = State.taHashTag
    const daClicked = clicked.daClicked
    const ohClicked = clicked.ohClicked
    const cnClicked = clicked.cnClicked

    function changeDA() {
        setState({
            taIntro: t('DigitalJourney.DAIIntro'),
            taConfig: <ul>
                        <li>기업의 AI 트렌드 알아보기</li>
                        <li>다양하고 복잡한 데이터 소스 관리를 위한 꿀 팁 소개</li>
                        <li>좀 더 쉬운 머신 러닝과 AI 모델 개발하는 방법 알아보기</li>
                        <li>AI 라이프 사이클! 데모 보면서 한번에 이해하기</li>
                        <li>내가 만든 모델! 과연 신뢰할 수 있는지 평가 해보기</li>
                    </ul>,
            taGuide: <ul>
                        <li>대상: 신규 사업 전략팀,  CxO, 현업 등 AI를 적용해 보고자 하는 관련 부서, 담당자 모두 가능</li>
                        <li>소요 시간: 2시간</li>
                    </ul>,
            taHashTag: t('DigitalJourney.DAHashtag'),
        })
        setClicked({ 
            daClicked: true,
            ohClicked: false,
            cnClicked: false,
        });
    }

    function changeOH() {
        setState({
            taIntro: t('DigitalJourney.OHIntro'),
            taConfig: <ul>
                        <li>마이크로 서비스 아키텍처가 무엇인가요?</li>
                        <li>기존 아키텍처와 마이크로 서비스 아키텍처 비교해 보기</li>
                        <li>마이크로 서비스 디자인의 기본 원리 이해하기 </li>
                        <li>클라우드 네이티브 앱 개발을 위한 개발 방법론 알아 보기 </li>
                    </ul>,
            taGuide: <ul>
                        <li>대상: IT 담당자, 앱 개발자 등 클라우드에 관심있는 분 누구나 가능</li>
                        <li>소요 시간 : 2시간</li>
                    </ul>,
            taHashTag: t('DigitalJourney.OHHashtag'),
        })
        setClicked({ 
            daClicked: false,
            ohClicked: true,
            cnClicked: false,
        });
    }

    function changeCN() {
        setState({
            taIntro: t('DigitalJourney.CNIntro'),
            taConfig: <ul>
                        <li>IBM Cloud Satellite 란 무엇인지 이해 하기</li>
                        <li>어떻게 구성하나요?  손쉬운 구성방법 알아보기</li>
                        <li>어디에 적용하나요?  다양한 활용 사례 살펴 보기</li>
                        <li>데모를 통해 이해하고 경험해 보기</li>
                    </ul>,
            taGuide: <ul>
                        <li>대상: 신규 사업 전략 팀, IT 관련 모든 부서</li>
                        <li>소요 시간: 1시간</li>
                    </ul>,
            taHashTag: t('DigitalJourney.CNHashtag'),
        })
        setClicked({ 
            daClicked: false,
            ohClicked: false,
            cnClicked: true,
        });
    }

    
    return (
        <>
            <BackgroundSection id="tb">
                <Container>
                    <MainFlexbox>
                        <Flexbox1>
                            <StepTitle>Technology Briefing</StepTitle>
                            <StepSubTitle>기술 브리핑</StepSubTitle>
                            <Picture src={require('../../images/tbpic.svg').default} alt='japan'/>
                        </Flexbox1>
                        <Flexbox2>
                            <ButtonBox>
                                <ExampleButton onClick={changeDA} className={daClicked ? 'active': ''}>Data <span>&#38;</span> AI Briefing</ExampleButton>
                                <ExampleButton onClick={changeOH} className={ohClicked ? 'active': ''}>Cloud Native Tech. Briefing</ExampleButton>
                                <ExampleButton onClick={changeCN} className={cnClicked ? 'active': ''}>IBM Cloud Satellite Briefing</ExampleButton>
                            </ButtonBox>
                            <SummaryTitleBox>
                                <SummaryDescription >{taIntro}</SummaryDescription>
                                <SummaryDescriptionHash>{taHashTag}</SummaryDescriptionHash>
                            </SummaryTitleBox>
                            <div style={{minWidth: "100%"}}>
                                <SummaryBoxContainer>
                                    <SummaryBox>
                                        <SummaryTitle>프로그램 구성</SummaryTitle>
                                        <SummaryDescription>
                                            <div style={{display: "inline-block", textAlign: "left", listStylePosition: "outside"}}>
                                                {taConfig}
                                            </div>
                                        </SummaryDescription>
                                    </SummaryBox>
                                    <SummaryBox>
                                        <SummaryTitle>프로그램 안내</SummaryTitle>
                                        <SummaryDescription>
                                            <div style={{display: "inline-block", textAlign: "left", listStylePosition: "outside"}}>
                                                {taGuide}
                                            </div>        
                                        </SummaryDescription>
                                    </SummaryBox>
                                </SummaryBoxContainer>
                            </div>
                        </Flexbox2>
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

export default TechonologyBriefing
