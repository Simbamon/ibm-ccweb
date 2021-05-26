import styled from 'styled-components'

export const CardSection = styled.div`
  padding-top: 30px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f4f4f4;

  @media screen and (max-width: 960px) {
    padding-top: 0;
    padding-bottom: 60px;
  }
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const CardsHeading = styled.h1`
  font-size: 3rem;

  @media screen and (max-width: 960px) {
    text-align: center;
    font-size: 2.35rem;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`

export const TitleCard = styled.div `
  position: relative;
	left: 50%;
	height: 50px;
	width: 60%;
  transform: translate(-50%, -50%);
	background-color: #017D79;
  border-radius: 20px;
	text-align: center;
  color: white;
  font-weight: bold;
  flex-wrap: wrap;
  line-height: 50px;
  font-size: 1.4rem;

  @media screen and (max-width: 1200px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 960px) {
    font-size: 0.9rem;
  }
`

export const Cards = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75)),
    url(${props => props.img});
  background-size: cover;
  width: 28vw;
  margin: 10px;
  height: 300px;
  text-decoration: none;
  cursor: pointer;
  

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),
      url(${props => props.img});
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 25px;
    &:hover {
      transform: none;
    }
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`

export const CardHidden = styled.div`
  padding-top: 0px;
    overflow:hidden;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
    margin-top:300px;
  
  @media screen and (max-width: 960px) {
    margin-top:0px;

    &:hover {
      transform: none;
    }
  }
  
`
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  padding: 10px;
  align-items: left;
  color: #fff;

  &:hover {
    ${CardHidden} {
      margin-top:0px;
      transition: all 0.3s ease-out;
    }
  }
  
`

export const CardTitle = styled.h1`
    color: #fff;
    font-size: 2.3rem;
    text-align: center;
    margin-top: 35px;
    

`

export const CardImg = styled.img`
  height: 100px;
  width: 100%;
`

export const CardSubHeading = styled.p`
    color: #fff;
    margin-bottom: 10px;
    font-size: 1rem;
    line-height: 1.7rem;
    margin-top: 20px;
    text-align: center;
    

`

export const CardHeading = styled.h4`
    color: #fff;
    font-size: 1.5rem;
`