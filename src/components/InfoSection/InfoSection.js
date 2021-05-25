import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from '../../globalStyles'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, SubHeading, ProgramLink, Subtitle, ImageWrapper, Img, HeaderDivider} from './InfoSection.element'
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade'
import Image from '../../images/laptop.jpg'

const InfoSection = ({ primary, lightBg, imgStart, lightTopLine, lightTextDesc, lightText, img, alt }) => {
    const { t } = useTranslation();    
    

    return (
        <>
            <InfoSec img = {Image} alt='usa' lightBg={lightBg}>
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
                                    <ProgramLink href='https://www.ibm.com/weather' target='_blank' aria-label='IBM_Weather'>프로그램 북 다운로드</ProgramLink>
                                    <Subtitle lightTextDesc={lightTextDesc}>IBM Client Center 프로그램은 <span style={{color: "blue", fontWeight: "600"}}>세가지</span> 프로그램으로 구성되어 있으며 고객 상황에 따라 <span style={{color: "blue", fontWeight: "600"}}>맞춤형 아젠다</span>를 제공해 드립니다.<br></br>
                                    모든 과정은 고객이 기술의 구현 과정을 쉽게 이해하고 실제 가치를 경험할 수 있도록 데모와 실습 위주로 설계되었습니다.
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
