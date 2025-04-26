import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Createpage from './Createpage'
import Gallery from './Gallery'


function App() {
  

  
    return ( 
        <>
        
        <Routes>
         
         <Route path='/' element={<Layout>
         
          <div id="home-other">

        <div className="inner-box" >
        <div className="inner-box-title">
        <p>Make your very own mob!</p>
        <p>Press on the nav bar to get started</p>
        </div>
   
          <div className="inner-list">
              <img src="./Main_screen.png" alt="main screen"></img>
         </div>
          </div>

            </div>  
                   
          </Layout>}/>
         <Route path='/create/' element={<Layout><Createpage/></Layout>}/>
         <Route path='/gallery/' element={<Layout><Gallery/></Layout>}/>
         
     </Routes>

       </>
   )
} 
    
            

          


      

export default App
