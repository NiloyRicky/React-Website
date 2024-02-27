import React from 'react'
import Meeting from './Meeting'
import { Route, Routes } from 'react-router-dom'
import House from './House'

function VideoCallApp() {
  return (
    <Routes>
        <Route path='/' element={<House/>}></Route>
        <Route path='/Meeting/:room' element={<Meeting/>}></Route>
    </Routes>
  )
}

export default VideoCallApp