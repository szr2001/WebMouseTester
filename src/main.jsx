import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MouseTest } from './Containers';
import { Footer, Navbar } from './Components';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <MouseTest />
    <Footer />
  </StrictMode>,
)
