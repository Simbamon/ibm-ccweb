import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from '../../globalStyles'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, SubHeading, ProgramLink, Subtitle, Icon, ImageWrapper, Img, HeaderDivider} from './InfoSection.element'
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade'
import Image from '../../images/laptop.jpg'
import { FaFileDownload } from 'react-icons/fa'

const InfoSection = ({ primary, lightBg, imgStart, lightTopLine, lightTextDesc, lightText, img, alt }) => {
    const { t } = useTranslation();    
    

    return (
        <>
            <InfoSec img = {Image} alt='usa' lightBg={lightBg} id="program">
                <Container>
                    
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <Fade top>
                                <TextWrapper>
                                    
                                    <Heading>여러분들의 고민 해결을 위한</Heading>
                                    <SubHeading>IBM Client Center 프로그램</SubHeading>
                                    {/* <TopLine lightTopLine={lightTopLine}>{t('Home.FirstTopLine')}</TopLine>
                                    
                                    <Heading lightText={lightText}>{t('Home.FirstHeadLine')}</Heading>
                                     */}
                                    
                                    <a href="https://ibm.com" target="_blank">
                                        <ProgramLink><Icon /> 프로그램북 다운로드</ProgramLink>
                                    </a>
                                    <Subtitle lightTextDesc={lightTextDesc}>IBM Client Center 프로그램은 <span style={{color: "#0062FF", fontWeight: "600"}}>세 가지 프로그램</span>으로 구성되어 있으며 고객 상황에 따라 <span style={{color: "#0062FF", fontWeight: "600"}}>맞춤형 아젠다</span>를 제공해 드립니다.<br></br>
                                    모든 과정은 기술의 구현 과정을 쉽게 이해하고 실제 가치를 경험할 수 있도록 데모와 실습 위주로 설계되었으며,<br></br>
                                    수십 년간 고객 프로젝트 현장에서 기술 역량을 쌓아온 IBM 전문가가 함께합니다.
                                    </Subtitle>
                                </TextWrapper>
                            </Fade>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
