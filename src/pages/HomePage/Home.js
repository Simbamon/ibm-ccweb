import React from 'react'
import { InfoOne, InfoTwo, InfoThree } from './Data'
import { InfoSection, TechonologyBriefing, ExperienceDay, Discovery, MainInfoSection, CardsSection } from '../../components'


const Home = () => {
    return (
        <>
            <MainInfoSection />
            <InfoSection {...InfoOne} />
            
            <CardsSection />
            <TechonologyBriefing />
            <ExperienceDay />
            <Discovery />
            {/* <InfoSection3 {...InfoThree} />
            <InfoSection2 {...InfoTwo} /> */}
            
            
        </>
    )
}

export default Home
