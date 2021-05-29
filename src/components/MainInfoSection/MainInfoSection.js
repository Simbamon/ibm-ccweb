import React from 'react'
import Img from '../../images/1..JPG'
import { Wrapper, BackgroundVid, TitleTextWrapper, MainTitle, MainParagraph, Icon, buttonsDiv, ReserveButton, ProgramExplore} from './MainInfoSection.element'
import { Link } from "react-scroll";

const MainInfoSection = () => {

    return (
        <>  
            <BackgroundVid img = {Img}></BackgroundVid>
            <Wrapper>
                
                
                <TitleTextWrapper>
                    {/* <MainTitle>{t('MainHome.Title1')}</MainTitle>
                    <MainTitle>{t('MainHome.Title2')}</MainTitle>
                    <TitleLine></TitleLine>
                    <MainParagraph>{t('MainHome.Description')}</MainParagraph> */}
                    <MainTitle>쌓여가는 데이터! 고민되시죠?</MainTitle>
                    <MainParagraph><Icon /> 데이터는 넘쳐나는데.. 도대체 무엇을 해야 하지?</MainParagraph>
                    <MainParagraph><Icon /> 우리 회사엔 데이터 사이언티스트도 없는데..</MainParagraph>
                    <MainParagraph><Icon /> 개념부터 잡고 싶은데.. 어떻게 시작을 하지?</MainParagraph>
                    <MainParagraph><Icon /> 초보자도 쉽게 접근할 수 있는 솔루션은 없을까?</MainParagraph>
                    <MainParagraph><Icon /> 넘쳐나는 솔루션들..  하나의 솔루션으로 해결할 수 없나?</MainParagraph>
                    <br></br>
                    <MainParagraph>무료로 제공되는 다양한 고객 경험 프로그램으로 당신의 고민을 시원하게 해결해 드립니다.</MainParagraph>
                    <buttonsDiv>
                        <ReserveButton>프로그램 신청하기</ReserveButton>
                        <ProgramExplore>
                            <Link
                                activeClass="active"
                                to="program"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                            >
                            프로그램 살펴보기
                            </Link>
                        </ProgramExplore>
                    </buttonsDiv>
                </TitleTextWrapper> 

            </Wrapper>
        </>
    )
}

export default MainInfoSection
