import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GitExpertApp } from './git-expert-app'
import './style.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GitExpertApp />
  </StrictMode>,
)
