import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.tsx'

// Exclude your own devices from Vercel Web Analytics.
// Visit the site with ?noanalytics once on a device (laptop, phone, etc.) to stop
// tracking it from then on. Visit with ?analytics to start tracking it again.
const params = new URLSearchParams(window.location.search)
if (params.has('noanalytics')) localStorage.setItem('va-disable', '1')
if (params.has('analytics')) localStorage.removeItem('va-disable')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Analytics
      beforeSend={(event) =>
        localStorage.getItem('va-disable') ? null : event
      }
    />
  </StrictMode>,
)
