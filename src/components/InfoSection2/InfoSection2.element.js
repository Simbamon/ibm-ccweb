import styled from 'styled-components'

export const BackgroundSection = styled.div`
    color: black;
    padding: 60px 0;
    background-color: #F2F4F8;
`

export const Container = styled.div `
    z-index: 1;
    width: 100%;
    max-width: 1500px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
    margin-bottom: 100px;
    

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
    margin: 0 -15px -15px -15px;
`

export const Flexbox1 = styled.div`
    flex: 1 1 15%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    display: flex;

    @media screen and (max-width: 991px) {
        flex: 1 1 100%;
        margin-left: 0px;
    }
`

export const StepTitle = styled.h1 `
    text-align: center;
    justify-content: center;
    align-items:center;
    margin: 50px;

    @media screen and (max-width: 991px) {
        margin: 20px;
    }
`

export const Flexbox2 = styled.div`
    flex: 1 0 75%;
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
export const SummaryBox = styled.div`
    flex: 1 0 calc(50% - 10px);
    background-color: transparent;
    padding: 40px;
    max-height: 220px;
    min-height: 220px;


    @media screen and (max-width: 1300px) {
        max-height: 200px;
    }

    @media screen and (max-width: 991px) {
        flex: 1 0 calc(100% - 10px);
        display: flex;
        padding: 40px;
        flex-direction: column;
        justify-content: center;
    }

`

export const SummaryTitle = styled.h1`
    font-size: 1.52rem;
    border-bottom: 2px solid blue;
    width: 50%;
    padding-bottom: 10px;
    margin-bottom: 10px;

    @media screen and (max-width: 991px) {
        width: 100%;
    }
`

export const SummaryDescription = styled.p`
    font-size: 0.8rem;
    white-space: pre-wrap;
    width: 80%;
`

export const Picture = styled.img`
    background-size: cover;
    width: 100%;
    height: 200px;

    @media screen and (max-width: 991px) {
        width: 100%;
    }

`

export const ExampleButton = styled.button`
    background: white;
    white-space: nowrap;
    padding: 10px 25px;
    color: black;
    font-weight: bold; 
    font-size: 13.5px;
    outline: none;
    border: 0;
    cursor: pointer;
    margin-right: 0;
    width: 33%;
    height: 100%;
    

    &:hover {
        transition: all 0.3s ease-out;
        background: blue;
        color:white;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
        margin: 5px;
    }
`