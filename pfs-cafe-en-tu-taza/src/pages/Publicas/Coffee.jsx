import React from 'react'
import Blog from '../../components/Coffee/Blog'
import Properties from '../../components/Coffee/Properies'
import Shop from '../../components/Coffee/Shop'
import NavBar from '../../components/Everywere/NavBar'
import Footer from '../../components/Everywere/Footer'

function Coffee() {
  return (
    <div>
        <NavBar />
        <Properties />
        <Shop />
        <Blog />
        <Footer />
    </div>
  )
}

export default Coffee