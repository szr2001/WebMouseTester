import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MouseTester } from './Containers';
import { Footer,Mouse, Navbar } from './Components';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Mouse />
    <Footer />
  </StrictMode>,
)
