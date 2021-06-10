import styled from 'styled-components'
import { FiCheckSquare } from 'react-icons/fi'

export const BackgroundVid = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 100%;
    height: 85vh;
    overflow: hidden;
    background: 
    url(${props => props.img});
    background-size: 100% 100%;
    
`

export const Videosrc = styled.video `
    width: 100%;
    object-fit: cover;
    z-index: -1;
    
`

export const Wrapper = styled.div `
    display: flex;
    justify-content: flex-start;
    max-width: 100%;
    align-items: center;
    height: 85vh;
    min-height: -webkit-fill-available;

    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 5%;

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
    min-width: 350px;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    padding: 45px 15px 45px 15px;
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 3;

    @media screen and (max-width: 991px) {
        min-width: 280px;
    }
`

export const MainTitle = styled.h1 `
    color: #fff;
    font-size: 2rem;
    text-align: left;
    padding-top: 20px;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        max-width: 250px;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 1rem;
        max-width: 250px;
    }
`

export const MainParagraph = styled.p `
    margin-top: 8px;
    padding-left: 5px;
    color: #fff;
    font-size: 0.85rem;
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