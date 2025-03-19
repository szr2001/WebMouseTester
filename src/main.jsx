import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MouseTesterPage } from './Containers';
import { Footer, Navbar } from './Components';

createRoot(document.getElementById('root')).render(
  <StrictMode> {/*remove in build*/}
    <Navbar />
    <MouseTesterPage />
    <Footer />
  </StrictMode>,
)
