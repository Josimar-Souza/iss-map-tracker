import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import IssContext from './context/issContext/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IssContext>
      <App />
    </IssContext>
  </StrictMode>,
)
