import React from 'react'
import {Header,CreateContainer,MainContainer} from './components'
import {Routes,Route} from "react-router-dom";
export const App = () => {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
  <Header />
  <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full ">
  <Routes>
     <Route path="/*" element={<MainContainer />} />
     <Route path="/createItem" element={<CreateContainer />} />
</Routes>
  </main>
</div>
  )
}
