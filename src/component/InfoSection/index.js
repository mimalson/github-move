import React from 'react'
import { Button } from '../ButtonElements'
import Image1 from "../../images/svg_1.svg"
import Image2 from "../../images/svg-2.svg"
import {
    InfoContainer,
    InfoWrapper,
    InfoRows,
    Column1,
    Column2,
    ImgWrap, 
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Img
 } from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine,lightText, 
headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
              <InfoRows imgStart={imgStart}>
                  <Column1>
                     <TextWrapper>
                     <TopLine>{topLine}</TopLine>
                     <Heading lightText={lightText}>{headLine}</Heading>
                     <Subtitle darkText={darkText}>{description}</Subtitle>
                     <BtnWrap>
                         <Button to="home" 
                           smooth={true}
                           duration={500}
                           spy = {true}
                           exact = "true"
                           offset={-80}
                           primary={primary ? 1 : 0}
                           dark= {dark ? 1 : 0}
                           dark2 = {dark2 ? 1 : 0}
                         >{buttonLabel}</Button>
                     </BtnWrap>
                     </TextWrapper>
                  </Column1>
                  <Column2>
                     <ImgWrap>
                        <Img src={Image1} alt={alt}/>
                        <Img src={Image2} alt={alt}/>
                     </ImgWrap>
                  </Column2>
              </InfoRows>
           </InfoWrapper>        
      </InfoContainer>
    </>
  )
}

export default InfoSection