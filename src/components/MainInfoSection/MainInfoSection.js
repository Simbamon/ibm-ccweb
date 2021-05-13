import React from 'react'
import Img from '../../images/5.jpg'
import { useTranslation } from 'react-i18next';
import { Wrapper, BackgroundVid, Videosrc, TitleTextWrapper, MainTitle, MainParagraph, MainParagraph2 } from './MainInfoSection.element'

const MainInfoSection = () => {
    const { t } = useTranslation(); 

    return (
        <>  
            <BackgroundVid img = {Img}></BackgroundVid>
            <Wrapper>
                
                
                <TitleTextWrapper>
                    {/* <MainTitle>{t('MainHome.Title1')}</MainTitle>
                    <MainTitle>{t('MainHome.Title2')}</MainTitle>
                    <TitleLine></TitleLine>
                    <MainParagraph>{t('MainHome.Description')}</MainParagraph> */}
                    <MainTitle>{t('MainHome.Title1')}</MainTitle>
                    <MainParagraph>{t('MainHome.Description1')}</MainParagraph>
                    <MainParagraph2>{t('MainHome.Description2')}</MainParagraph2>
                </TitleTextWrapper> 

            </Wrapper>
        </>
    )
}

export default MainInfoSection
