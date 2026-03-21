import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './tribe'
import './index.css'
import App from './App.tsx'
import About from './components/About.tsx'
import AnalyticsPage from './components/AnalyticsPage.tsx'
import Download from './components/Download.tsx'
import NativeUrlsPage from './components/NativeUrlsPage.tsx'
import RewardsPage from './components/RewardsPage.tsx'
import BountyProgramsPage from './components/BountyProgramsPage.tsx'
import BlogIndex from './blog/BlogIndex.tsx'
import PrivacyFirstBrowsing from './blog/posts/privacy-first-browsing.tsx'
import WebRewardsEcosystem from './blog/posts/web-rewards-ecosystem.tsx'
import BrowserPerformanceBenchmarks from './blog/posts/browser-performance-benchmarks.tsx'

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
        <Route path="/bounty-programs" element={<BountyProgramsPage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/privacy-first-browsing" element={<PrivacyFirstBrowsing />} />
        <Route path="/blog/web-rewards-ecosystem" element={<WebRewardsEcosystem />} />
        <Route path="/blog/browser-performance-benchmarks" element={<BrowserPerformanceBenchmarks />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
