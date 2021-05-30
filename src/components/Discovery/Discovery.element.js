import styled from 'styled-components'
import { BsArrowUp } from 'react-icons/bs'

export const BackgroundSection = styled.div`
    color: black;
    background-color: white;
`

export const Container = styled.div `
    display: table-cell;
    z-index: 1;
    width: 100%;
    height: 100%;
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

export const Flexbox1 = styled.div`
    flex-basis: 35%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-right: 100px;
    @media screen and (max-width: 991px) {
        flex: 1 1 100%;
        margin-left: 0px;
        padding-right: 0px;
    }
`

export const StepTitle = styled.h1 `
    flex: 1 0 100%;
    margin: auto;
    padding-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    color: #D12765;
    font-size: 2.5rem;
    font-style: italic;
`
export const StepSubTitle = styled.h1 `
    text-align: center;
    justify-content: center;
    padding-bottom: 55px;
    align-items:center;
    font-size: 1.7;
    margin: 10px;

    @media screen and (max-width: 991px) {
        margin: 20px;
    }
`

export const Picture = styled.img`
    max-width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    max-height: 500px;

    @media screen and (max-width: 991px) {
        padding-left: 0px;
        padding-right: 0px;
    }

`

export const Flexbox2 = styled.div`
    flex-basis: 65%;
    flex-grow: 2;
    flex-wrap: wrap;
    align-items: center;
    display: flex;

    @media screen and (max-width: 991px) {
        margin-left: 0px;
    }
`

export const ButtonBox = styled.div`
    display: flex;
    flex: 1 0 100%;
    justify-content: space-around;

    @media screen and (max-width: 991px) {
        flex-direction: column;
        align-items: center;
    }
`

export const SummaryTitleBox = styled.div`
    flex: 1 0 100%;
    margin: auto;
    padding-top: 20px;    
    text-align: center;
    min-height: 145px;
    max-height: 100%;
    

    @media screen and (max-width: 1300px) {
        max-height: 100%;
    }

    @media screen and (max-width: 991px) {
        flex: 1 0 calc(100% - 10px);
        display: flex;
        padding: 40px;
        flex-direction: column;
        justify-content: center;
    }

`

export const SummaryBox = styled.div`
    flex: 1 0 calc(50% - 50px);
    padding: 40px;
    max-height: 100%;
    min-height: 310px;


    @media screen and (max-width: 1000px) {
        flex: 1 0 calc(100% - 10px);
        min-height: 100%;
        display: flex;
        padding: 40px;
        flex-direction: column;
        justify-content: center;
    }

`

export const SummaryTitle = styled.h1`
    font-size: 1.5rem;
    width: 100%;
    padding-bottom: 10px;
    margin-bottom: 10px;
    text-align: center;
    color: #D12765;
    padding:auto;
    @media screen and (max-width: 991px) {
        width: 100%;
    }
`

export const SummaryDescription = styled.p`
    font-size: 0.93rem;
    line-height: 1.8rem;
    white-space: pre-wrap;
    width: 100%;
    text-align: center;

`
export const SummaryDescriptionHash = styled.p`
    font-size: 0.93rem;
    line-height: 2.1rem;
    white-space: pre-wrap;
    width: 100%;
    text-align: center;
    color: #0062FF;
`

export const ExampleButton = styled.a`
    background: white;
    white-space: nowrap;
    padding: 10px 25px;
    color: black;
    font-weight: bold; 
    font-size: 1.4rem;
    text-align: center;
    outline: none;
    border: 0;
    cursor: pointer;
    margin-right: 0;
    width: 33%;
    height: 100%;
    background: linear-gradient(#D12765, #D12765) bottom/0% 2px no-repeat;
    transition:0.5s all;


    &.active{
        background-size: 40% 2px;
    }
    &:hover {
        background-size: 40% 2px;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
        margin: 5px;
    }
`

export const SummaryBoxContainer = styled.div`
    background-color: #e6e6e6;
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;
    margin-right: 20px;
    flex: auto;

    @media screen and (max-width: 991px) {
        margin-left: 0px;
        margin-right: 0px;
    }
`

export const Arrowright = styled.div`
    width: 0; 
    height: 0;
    margin: 5px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid #c00000;

    @media screen and (max-width: 991px) {
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 15px solid #c00000;   
    }
`

export const DiagramWrapper = styled.div `
    display: flex;
    vertical-align: middle;

    @media screen and (max-width: 991px) {
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const DiagramText = styled.p `
    text-align: center;
    padding-bottom: 10px;
    padding-top: 10px;
`

export const DiagramBox = styled.div `
    width: 100%; 
    height: 100px;
    border: 0.13rem solid #D12765;
    border-radius: 10px;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    background-color: #FFF;

    @media screen and (max-width: 991px) {
        height: 100%;
        flex-direction: column;
        width: 180px;
        justify-content: center;
        margin: auto;
    }
    
    
` 

export const DiagramBoxDescription = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    width: 100px; 
    height: 60px;
    border-radius: 10px;
    border: 0.2rem solid #FFA1C2; 
    background-color: #FFA1C2;
    color: #fff;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.7rem;
    line-height: 1.5rem;
    font-weight: 600;
    flex: 1;

    @media screen and (max-width: 991px) {
        margin: 15px;
        height: 100%;
        flex-direction: column;
        width: 150px;
    }
`

export const CommentBox = styled.div`
    position: relative; 
    margin-top: 40px;

    @media screen and (max-width: 991px) {
        padding-top: 60px;

    }
`

export const Comment = styled.p`
    position: absolute; 
    right: 0;
    bottom: 0;
    font-size: 0.8rem;
`

export const Arrow = styled(BsArrowUp)`
    font-size: 1.5rem;
    vertical-align: middle;
`

export const GoBack = styled.button`
    margin-top: 80px;
    font-size: 1.1rem;
    background-color: transparent;
    border: none;
    transition: transform .2s;
    float: right;
    color: #D12765;
    font-weight: bold;
    
    &:hover ${Arrow}{
        padding-bottom: 7px;
        transform: scale(1.3)
    }
    :hover {
        transform: scale(1.3)
    }
    
`

