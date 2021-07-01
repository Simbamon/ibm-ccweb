import styled from 'styled-components'
import { FiCheckSquare } from 'react-icons/fi'

export const BackgroundSection = styled.div`
     top: 0;
     right: 0;
     bottom: 0;
     left: 0;
     max-width: 100%;
     overflow: hidden;
     background: black;
`
export const Container = styled.div `
    display: table-cell;
    z-index: 1;
    width: 100%;
    height: 100vh;
    max-width: 100vw;
    margin-right: auto;
    margin-left: auto;
    padding-right: 6vw;
    padding-left: 6vw;
    

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
    
`

export const MainFlexbox = styled.div`
    vertical-align: middle;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content:center;
    flex-direction: row;
    margin-bottom: 15vh;
    margin-top: 15vh;
    @media screen and (max-width: 991px) {
        margin-bottom: 5vh;
        margin-top: 5vh;
    }
`

export const Wrapper = styled.div `
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    justify-content:center;
    flex-direction: row;
    flex-basis: 50%;
    align-items: center;
    height: 100%;
    min-height: -webkit-fill-available;
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width: 991px) {
        max-width: 1300px;
        justify-content: center;
        margin-right: auto;
        margin-left: auto;
        padding-right: 0;
        padding-left: 0;
    }
    
    
`

export const TitleTextWrapper = styled.div `
    border: none;
    align-items: center;
    width: 100%;
    padding: 45px 15px 45px 15px;
    display: flex;
    flex-direction: column;
    z-index: 3;

    @media screen and (max-width: 991px) {
        min-width: 280px;
    }
`

export const MainTitle = styled.h1 `
    color: #fff;
    font-size: 2.1rem;
    text-align: left;
    padding-top: 20px;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
        font-size: 1.7rem;
        max-width: 100%;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 1.2rem;
        max-width: 100%;
    }
`

export const MainParagraph = styled.p `
    margin-top: 8px;
    padding-left: 5px;
    color: #fff;
    font-size: 0.9rem;
    text-align: left;
    max-width: 700px;
    @media screen and (max-width: 768px) {
        font-size: 0.7rem;
        max-width: 270px;
    }
    
    @media screen and (max-width: 480px) {
        max-width: 270px;
        font-size: 0.6rem;
    }

`

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

export const ReserveButton = styled.button`

    background: #0062FF;
    white-space: nowrap;
    padding: 10px 25px;
    color: #fff;
    font-size: 13px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    margin-right: 30px;
    width: 90%;


    &:hover {
        transition: all 0.3s ease-out;
        border: none;
        background: white;
        color: black;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-right: 0;
        margin-bottom: 15px;
    }
`
export const Icon = styled(FiCheckSquare)`
    font-size: 1.4rem;
    margin-right: 7px;
    vertical-align: middle;

    @media screen and (max-width: 768px) {
        font-size: 1.0rem;
        margin-right: 5px;
    }
`

export const ProgramExplore = styled.p `
    font-size: 13px;
    line-height: 19px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    background: linear-gradient(#fff, #fff) bottom/0% 2px no-repeat;
    transition:0.5s all;


    &:hover {
        background-size: 100% 2px;
    }
`

export const VideoWrapper = styled.div`
    padding-right: 5vw;
    width: 100%;

    @media screen and (max-width: 768px) {
        padding-right: 0vw;
        width: 90vw;
    }
`
