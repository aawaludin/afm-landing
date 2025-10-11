import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DarkModeProvider } from './contexts/DarkModeContext.jsx'
import './index.css'
import { Analytics } from '@vercel/analytics/next';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
       <Analytics />
    </DarkModeProvider>
  </React.StrictMode>,
)
