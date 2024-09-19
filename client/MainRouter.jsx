import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Services from './src/services'
import Project from './src/project'
import Layout from './components/Layout'

const MainRouter = () => {
    return (<div>
        <Layout/>
        <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/project" element={<Project />} />
            <Route exact path="/contact" element={<Contact />} />
        </Routes>
    </div>
    )
}

export default MainRouter
