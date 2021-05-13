import styled from 'styled-components'


export const InfoSec = styled.div`
    color: #fff;
    padding: 60px 0;
    background-color: #F2F4F8
`

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    
    flex-direction: row;
`

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 49%;
    flex-basis: 49%;
    justify-content: space-around;
    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`

export const TextWrapper = styled.div `
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    
    
    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`

export const TopLine = styled.div `
    color: ${({lightTopLine}) => (lightTopLine ? '#a9b3c1' : '#1c2237')};
    font-size: 16px;
    line-height: 16px;
    font-weight: 550;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`

export const Divider = styled.div `
    border-left: 2px solid black;
    height: 100px;
    margin-bottom: 45px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const Heading = styled.h1 `
    margin-bottom: 24px;
    font-size: 30px;
    line-height: 35px;
    color: black;
`

export const Subtitle = styled.p `
    max-width: 100%;
    margin-bottom: 35px;
    font-size: 19px;
    line-height: 40px;
    color: black;
    white-space: pre-line;
    padding-left: 55px;


    @media screen and (max-width: 768px) {
        font-size: 13px;
        line-height: 25px;
    }
`



export const ImageWrapper = styled.div `
    max-width: 555px;
    display: flex;
    justify-content: ${({start}) => start ? 'flex-start' : 'flex-end'};
`

export const Img = styled.img `
    
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;

`

