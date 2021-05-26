import styled from 'styled-components'

export const BackgroundVid = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 100%;
    height: 70%;
    overflow: hidden;
    background-image: 
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
    height: 70vh;
    min-height: -webkit-fill-available;

    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 5%;

    @media screen and (max-width: 991px) {
        max-width: 1300px;
        padding-right: 30px;
        padding-left: 30px;
    }
    
    
`

export const TitleTextWrapper = styled.div `
    border: none;
    min-width: 600px;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    padding: 35px;
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 3;

    @media screen and (max-width: 991px) {
        min-width: 280px;
        padding: 20px;
    }
`

export const MainTitle = styled.h1 `
    color: #fff;
    font-size: 2rem;
    text-align: left;
    margin-bottom: 15px;

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

export const buttonsDiv = styled.div`
  display: flex;
`

export const ReserveButton = styled.button`
    margin-top: 30px;
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
    width: 30%;


    &:hover {
        transition: all 0.3s ease-out;
        border: none;
        background: white;
        color: black;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 15px;
    }
`

export const ProgramExplore = styled.a `
    font-size: 13px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    padding-bottom: 10px;
    background: linear-gradient(#fff, #fff) bottom/0% 2px no-repeat;
    transition:0.5s all;


    &:hover {
        background-size: 100% 2px;
    }

    

`