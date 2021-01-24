import React , {useState} from 'react'
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';
import  {
    VideoBg,
    HeroContainer,
    HeroContent,
    HeroBg,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './HeroElements';


const HeroSection = () => {
    const [hover,setHover]=useState(false)

    const onHover =()=>{
        setHover(!hover)
    }


    return (
        <HeroContainer id="home">
            <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>

            <HeroContent>
            <HeroH1>
                Virtual Banking Made Easy
            </HeroH1>
            <HeroP>
                Signup for a new account today and receive  $250 i credit towards your next payment.
            </HeroP>

            <HeroBtnWrapper>
                <Button to="signup" 
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary ='true'
                dark='true'
                > 
                    Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>

 );
}

export default HeroSection
