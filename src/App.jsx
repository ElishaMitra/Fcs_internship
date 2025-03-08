import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SolutionSection from './components/Solutions'
import Footer from './components/Footer'
import SuccessStories from './components/SuccessStory'
import RecognitionSection from './components/RecognisionSection'

const App = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <HeroSection/>
    <SolutionSection/>
    <SuccessStories/>
    <RecognitionSection/>
    <Footer/>
    </>
  )
}

export default App
