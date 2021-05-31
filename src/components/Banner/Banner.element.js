import styled from 'styled-components'


export const Wrapper = styled.div`
    color: #FFF;
    padding: 70px 0;
    background-color: #000000;
`

export const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    margin-left: 5vw;
    margin-right: 5vw;
`


export const Flexbox1 = styled.div`
    flex: 1 0 50%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-basis: 100%;
    }

`

export const BannerTitle = styled.h1 `
    padding-top: 20px;
    margin-bottom: 20px;
    font-size: 1.8rem;
`
export const BannerSubtitle = styled.h1 `
    padding-bottom: 35px;
    font-size: 0.9rem;
    line-height: 1.8rem;
`
export const ButtonWrapper = styled.div`
    display: flex;
`

export const Button = styled.div`
    background: #0062FF;
    display:table;
    height:36px;
    white-space: nowrap;
    color: #fff;
    font-size: 0.8rem;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    margin-right: 15px;
    width: 120px;

    &:hover {
        transition: all 0.3s ease-out;
        border: none;
        background: white;
        color: black;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 50px;
    }
`

export const ButtonText = styled.p`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
`

export const Flexbox2 = styled.div`
    flex: 1 0 50%;
    align-items: center;
    justify-content: center;
    display: flex;
`

export const ImageWrapper =styled.div `
    display:flex; 
    justify-content: space-between;
    width: 65%;

    @media screen and (max-width: 991px) {
        width: 100%
    }
`

export const BannerImage = styled.img `
    width: 100px;
    height: 100px;

    @media screen and (max-width: 991px) {
        width: 80px;
        height: 80px;
    }
`

export const BannerImageText = styled.p `
    color: #009D9A;
    margin-top: 10px;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;

    @media screen and (max-width: 991px) {
        font-size: 1.2rem;
    }
`