import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import About from './components/About.tsx'
import AnalyticsPage from './components/AnalyticsPage.tsx'
import Download from './components/Download.tsx'
import NativeUrlsPage from './components/NativeUrlsPage.tsx'
import RewardsPage from './components/RewardsPage.tsx'

import ScrollToTop from './ScrollToTop.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/download" element={<Download />} />
        <Route path="/about" element={<About />} />
        <Route path="/native-urls" element={<NativeUrlsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/rewards" element={<RewardsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
