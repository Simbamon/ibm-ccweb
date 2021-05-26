import styled from 'styled-components'
import { FaFileDownload } from 'react-icons/fa'

export const InfoSec = styled.div`
    color: #fff;
    padding: 60px 0;
    background-color: #F2F4F8;
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

export const ProgramLink = styled.button`
    background: #0062FF;
    white-space: nowrap;
    height: 55px;
    padding: 10px 25px;
    color: #fff;
    font-size: 21px;
    font-weight: bold;
    outline: none;
    border: 0px;
    cursor: pointer;
    margin-right: 0;
    width: 280px;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 20px;

    &:hover {
        transition: all 0.3s ease-out;
        transform: scale(1.1);
    }

    @media screen and (max-width: 768px) {
        width: 60%;
    }
    @media screen and (max-width: 468px) {
        width: 80%;
    }
`

export const Icon = styled(FaFileDownload)`
`

export const Subtitle = styled.p `
    max-width: 100%;
    margin-top: 16px;
    font-size: 23px;
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

