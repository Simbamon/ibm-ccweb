import React, { useState } from 'react'
import { BackgroundSection, MainFlexbox, Flexbox1, ButtonBox, SummaryBoxContainer, SummaryBox, SummaryTitleBox, Flexbox2, StepTitle, StepSubTitle,
         Container, SummaryTitle, SummaryDescription, SummaryDescriptionHash, Picture, ExampleButton, Arrowright, DiagramWrapper, DiagramText, DiagramBox, 
         DiagramBoxDescription, CommentBox, Comment, GoBack, Arrow } from './Discovery.element'
import { useTranslation } from 'react-i18next';
import { Link } from "react-scroll";

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
                                </ul>
                            </div>
                        </SummaryDescription>
                    </SummaryBox>
                    <SummaryBox>
                        <SummaryTitle>프로그램 안내</SummaryTitle>
                        <SummaryDescription>
                            <div style={{display: "inline-block", textAlign: "left"}}>
                            <ul>
                                <li>대상: 비즈니스에 머신 러닝 및 AI를 적용하고자 하는 고객사 임원, 현업 리더, IT 리더, CDO 등</li>
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
                                </ul>
                            </div>
                        </SummaryDescription>
                    </SummaryBox>
                    <SummaryBox>
                        <SummaryTitle>프로그램 안내</SummaryTitle>
                        <SummaryDescription>
                            <div style={{display: "inline-block", textAlign: "left"}}>
                            <ul>
                                <li>대상: 비즈니스에 머신 러닝 및 AI를 적용하고자 하는 고객사 임원, 현업 리더, IT 리더, CDO 등</li>
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
                            <DiagramWrapper>
                            <div>
                                    <DiagramText>프로젝트 시작 전</DiagramText>
                                        <DiagramBox>
                                            <DiagramBoxDescription>
                                                Framing<br></br>Workshop
                                            </DiagramBoxDescription>
                                        </DiagramBox>
                                    <DiagramText>기간: 2시간</DiagramText>
                                </div>
                                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Arrowright></Arrowright>
                                </div>
                                <div>
                                    <DiagramText>IBM Garage Engagement Process</DiagramText>
                                        <DiagramBox style={{margin:"auto"}}>
                                            <DiagramBoxDescription style={{backgroundColor: "#EE538B", border: "0.2rem solid #EE538B"}}>
                                                Discovery<br></br>Workshop
                                            </DiagramBoxDescription>
                                            <DiagramBoxDescription style={{marginLeft: "0px", marginRight: "0px", backgroundColor: "#EE538B", border: "0.2rem solid #EE538B"}}>
                                                Architecture<br></br>Workshop
                                            </DiagramBoxDescription>
                                            <DiagramBoxDescription style={{backgroundColor: "#EE538B", border: "0.2rem solid #EE538B"}}>
                                                Minimum Viable<br></br>Product Build-up
                                            </DiagramBoxDescription>
                                        </DiagramBox>
                                    <DiagramText>기간: 5주 ~ 12주 ( 유스케이스 복잡도에 따라 결정 )</DiagramText>
                                </div>
                                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Arrowright></Arrowright>
                                </div>
                                <div>
                                    <DiagramText>프로젝트 이후</DiagramText>
                                        <DiagramBox style={{border: "0.2rem dashed #D12765"}}>
                                            <DiagramBoxDescription style={{backgroundColor: "#D22765", border: "0.2rem solid #D22765"}}>
                                                Extension
                                            </DiagramBoxDescription>
                                        </DiagramBox>
                                </div>
                            </DiagramWrapper>
                            </div>
                        </SummaryDescription>
                        <CommentBox>
                            <Comment>
                                * IBM Garage에 대해 좀 더 알고 싶다면, Garage 소개 세션을 진행해 드립니다. (소개 세션은 무료)
                            </Comment>
                        </CommentBox>
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

export default Discovery
