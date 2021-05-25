import styled from 'styled-components'


export const InfoSec = styled.div`
    color: #fff;
    padding: 60px 0;
    background-color: #F2F4F8;
    border-bottom: 1px solid #e6e6e6;
`

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    
    flex-direction: row;
`

export const InfoColumn = styled.div`
    flex: 1;
    max-width: 100%;
    flex-basis: 100%;
    justify-content: space-around;
    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`

export const TextWrapper = styled.div `
    align-items: center;
    text-align: center;
    max-width: 100%;
    padding-top: 0;
    
    
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

export const Heading = styled.h1 `
    margin-bottom: 16px;
    font-size: 26px;
    line-height: 42px;
    color: black;
`

export const SubHeading = styled.h1 `
    margin-bottom: 16px;
    font-size: 37px;
    line-height: 42px;
    color: black;
`

export const ProgramLink = styled.a `
    font-size: 21px;
    line-height: 42px;
    font-weight: bold;
    color: blue;
    text-decoration: none;
    padding-bottom: 10px;
    background: linear-gradient(blue, blue) bottom/0% 2px no-repeat;
    transition:0.5s all;


    &:hover {
        background-size: 100% 2px;
    }
    

`

export const Subtitle = styled.p `
    max-width: 100%;
    margin-top: 16px;
    margin-bottom: 10px;
    font-size: 21px;
    line-height: 35px;
    color: black;
    white-space: pre-line;
    padding-left: 55px;


    @media screen and (max-width: 768px) {
        font-size: 13px;
        line-height: 25px;
        padding-left: 0px;
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

