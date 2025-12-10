import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from './Context/ThemeContext.jsx'
import { NotificationProvider } from './Context/NotificationContext.jsx'

createRoot(document.getElementById('main')).render(
  <StrictMode>
    <BrowserRouter>
        <ThemeProvider>
          <NotificationProvider>
            <App />
          </NotificationProvider>    
        </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
