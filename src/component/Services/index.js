import React from 'react'
import Icon1 from "../../svg-1.svg"
import Icon1 from "../../svg-2.svg"
import Icon1 from "../../svg-3.svg"
import { 
    ServicesContainer,
    ServicesCard,
    ServicesWrapper,
    ServicesIcon,
    ServicesH1,
    ServicesH2,
    ServicesP
} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}></ServicesIcon>
                <ServicesH2>Reduce expenses</ServicesH2>
                <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon2}></ServicesIcon>
                <ServicesH2>Virtual Offices</ServicesH2>
                <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={3}></ServicesIcon>
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>Unlock our special membership card that return 5% cash back.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services