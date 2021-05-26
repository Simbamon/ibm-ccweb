import styled from 'styled-components'

export const BackgroundSection = styled.div`
    color: black;
    padding: 60px 0;
    background-color: white;
`

export const Container = styled.div `
    z-index: 1;
    width: 100%;
    max-width: 100vw;
    margin-right: auto;
    margin-left: auto;
    padding-right: 6vw;
    padding-left: 6vw;
    margin-bottom: 30px;
    margin-top: 30px;
    

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
    
`

export const MainFlexbox = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content:center;
    flex-direction: row;
`

export const Flexbox1 = styled.div`
    flex: 1 1 30%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 991px) {
        flex: 1 1 100%;
        margin-left: 0px;
    }
`

export const StepTitle = styled.h1 `
    text-align: center;
    justify-content: center;
    align-items:center;
    color: #017D79;
    font-size: 2.5rem;
    font-style: italic;
    

    @media screen and (max-width: 991px) {
        margin: 20px;
    }
`
export const StepSubTitle = styled.h1 `
    text-align: center;
    justify-content: center;
    align-items:center;
    font-size: 1.7;
    margin: 10px;

    @media screen and (max-width: 991px) {
        margin: 20px;
    }
`

export const Flexbox2 = styled.div`
    flex: 1 0 70%;
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
    padding: 40px;    
    text-align: center;
    min-height: 145px;
    max-height: 100%;
    

    @media screen and (max-width: 1300px) {
        max-height: 250px;
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
    background-color: #e6e6e6;
    padding: 40px;
    max-height: 280px;
    min-height: 280px;


    @media screen and (max-width: 991px) {
        flex: 1 0 calc(100% - 10px);
        min-height: 100%;
        display: flex;
        padding: 40px;
        flex-direction: column;
        justify-content: center;
    }

`

export const SummaryTitle = styled.h1`
    font-size: 1.7rem;
    width: 100%;
    padding-bottom: 10px;
    margin-bottom: 10px;
    text-align: center;
    color: #017D79;
    padding:auto;
    @media screen and (max-width: 991px) {
        width: 100%;
    }
`

export const SummaryDescription = styled.p`
    font-size: 0.95rem;
    white-space: pre-wrap;
    width: 100%;
    text-align: center;
`

export const Picture = styled.img`
    background-size: cover;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 991px) {
    }

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
    background: linear-gradient(#017D79, #017D79) bottom/0% 2px no-repeat;
    transition:0.5s all;


    &.active{
        background-color:red;
    }
    &:hover {
        background-size: 100% 2px;
    }
    &:focus {
        background: blue;
        color: white;
    }
    /* &:hover {
        transition: all 0.3s ease-out;
        background: blue;
        color:white;
    } */

    @media screen and (max-width: 1000px) {
        width: 100%;
        margin: 5px;
    }
`