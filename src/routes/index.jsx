import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import PageLayout from '../layouts/PageLayout'

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<PageLayout/>}>
                <Route index element={<Home/>}/>
            </Route>
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Paths
