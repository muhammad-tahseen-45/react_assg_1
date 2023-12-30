import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav_Bar from './components/Nav_Bar'
import Section_2 from './components/srction_2'
import "./app.css" 
import Section_3 from './components/section_3'
import Section_4 from './components/section_4'
import Section_5 from './components/Section_5'
import Section_6 from './components/Section_6'
import Section_7 from './components/Section_7'
import Section_8 from './components/Section_8'


function App() {
  

  return (
    <div className='container'>
      <Nav_Bar/>
      <Section_2/>
      <Section_3/>
      <Section_4/>
      <Section_5/>
      <Section_6/>
      <Section_7/>
      <Section_8/>
    </div>
  )
}

export default App
