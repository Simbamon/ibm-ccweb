import React from 'react'
import { Container } from '../../globalStyles'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, SubHeading, ProgramLink, Subtitle, Icon } from './InfoSection.element'
import Image from '../../images/laptop.jpg'

const InfoSection = () => {

    return (
        <>
            <InfoSec img = {Image} alt='usa' id="program">
                <Container id="main">
                    <InfoRow>
                        <InfoColumn>
                                <TextWrapper>
                                    
                                    <Heading>여러분들의 고민 해결을 위한</Heading>
                                    <SubHeading>IBM Client Center 프로그램</SubHeading>
                                    <a href="https://ibm.biz/ClientCenterProgram" target="_blank" rel="noreferrer">
                                        <ProgramLink><Icon /> 프로그램북 다운로드</ProgramLink>
                                    </a>
                                    <Subtitle>IBM Client Center 프로그램은 <span style={{color: "#0062FF", fontWeight: "600"}}>세 가지 타입의 프로그램</span>으로 구성되어 있으며 고객 상황에 따라 <span style={{color: "#0062FF", fontWeight: "600"}}>맞춤형 아젠다</span>를 제공해 드립니다.<br></br>
                                    모든 과정은 기술의 구현 과정을 쉽게 이해하고 실제 가치를 경험할 수 있도록 데모와 실습 위주로 설계되었으며,<br></br>
                                    수십 년간 고객 프로젝트 현장에서 기술 역량을 쌓아온 IBM 전문가가 함께합니다.
                                    </Subtitle>
                                </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
