import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './Containers'

createRoot(document.getElementById('root')).render(
  <StrictMode> {/*remove in build*/}
    <App/>
  </StrictMode>,
)
