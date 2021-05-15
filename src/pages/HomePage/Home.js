import React from 'react'
import { InfoOne, InfoTwo, InfoThree } from './Data'
import { InfoSection, InfoSection2, InfoSection3, MainInfoSection, CardsSection } from '../../components'


const Home = () => {
    return (
        <>
            <MainInfoSection />
            <InfoSection {...InfoOne} />
            
            <CardsSection />
            <InfoSection2 />
            {/* <InfoSection3 {...InfoThree} />
            <InfoSection2 {...InfoTwo} /> */}
            
            
        </>
    )
}

export default Home
