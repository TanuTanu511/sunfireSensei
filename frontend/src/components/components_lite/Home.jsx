import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Categories from './Categories'
import LatestJob from './LatestJob'
import Footer from './Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'

const Home = () => {
  useGetAllJobs();
  return (
    <div>
      <Navbar></Navbar>
      <Header/>
      <Categories/>
      <LatestJob/>
      <Footer/>
    </div>
  )
}

export default Home
