import Navbar from '../components/Navbar';
import React , {useState} from 'react';
import Sidebar from '../components/Slider';
import HeroSection from '../components/HeroSection' 

const Home = () =>{
    const [isOpen , setIsOpen]=useState(false) 

    const toggle = () => { 
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen ={isOpen}  toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
        </>
    );
};

export default Home;