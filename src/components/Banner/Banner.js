import React from 'react'
import { Wrapper, FlexContainer, Flexbox1, Flexbox2, BannerTitle, BannerSubtitle, ButtonWrapper, Button, ButtonText , 
        ImageWrapper, BannerImage, BannerImageText } from './Banner.element'
function Banner() {
    return (
        <>
            <Wrapper>
                <FlexContainer>
                    <Flexbox1>
                        <BannerTitle>IBM과 함께 성장하는 비즈니스 파트너를 찾습니다.</BannerTitle>
                        <BannerSubtitle>혼자서는 할 수 없지만, IBM과 함께라면 성공 할 수 있습니다.<br></br>
                        지금 바로 IBM 파트너월드에 방문하셔서, 비즈니스 파트너에게 제공되는 다양한 혜택을 만나보세요.   
                        </BannerSubtitle>
                        <ButtonWrapper>
                            <div style={{display: 'flex'}}>
                                <Button style={{display: 'table'}}>
                                    <ButtonText>자세히 보기</ButtonText>
                                </Button>
                                <Button>
                                    <ButtonText>IBM 파트너월드<br></br> 바로 가기</ButtonText>
                                </Button>
                            </div>
                        </ButtonWrapper>
                    </Flexbox1>
                    <Flexbox2>
                        <ImageWrapper>
                            <div>
                                <BannerImage src={require('../../images/build.png').default} alt='build'/>
                                <BannerImageText>Build</BannerImageText>
                            </div>
                            <div>
                                <BannerImage src={require('../../images/service.png').default} alt='build'/>
                                <BannerImageText>service</BannerImageText>
                            </div>
                            <div>
                                <BannerImage src={require('../../images/sell.png').default} alt='build'/>
                                <BannerImageText>sell</BannerImageText>
                            </div>
                        </ImageWrapper>
                    </Flexbox2>
                </FlexContainer>
            </Wrapper>
        </>
    )
}

export default Banner
