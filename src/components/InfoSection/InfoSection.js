import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from '../../globalStyles'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImageWrapper, Img, HeaderDivider, Divider} from './InfoSection.element'
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
                                    <TopLine lightTopLine={lightTopLine}></TopLine>
                                    
                                    <Heading lightText={lightText}>디지털 여정을 위한 고객 경험 3단계 프로그램</Heading>
                                    {/* <TopLine lightTopLine={lightTopLine}>{t('Home.FirstTopLine')}</TopLine>
                                    
                                    <Heading lightText={lightText}>{t('Home.FirstHeadLine')}</Heading>
                                    <Subtitle lightTextDesc={lightTextDesc}>{t('Home.FirstSummary')}</Subtitle> */}
                                    <Link to=''>
                                        <Button big fontBig primary={primary}>
                                            프로그램 북 다운로드
                                            {/* {t('Home.FirstButton')} */}
                                        </Button>
                                    </Link> 
                                </TextWrapper>
                            </Fade>
                        </InfoColumn>
                        <InfoColumn>
                            <Fade top>
                                    <Subtitle lightTextDesc={lightTextDesc}>{t('Home.FirstSummary')}</Subtitle>
                            </Fade>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
