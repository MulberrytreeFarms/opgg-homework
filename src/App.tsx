import '@/styles/base.css'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Layout from '@/layouts'
import { LandingPage, ScorePage } from '@/pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/score" element={<ScorePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
