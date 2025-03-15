import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MouseTester } from './Containers';
import { Footer, Mouse, Section, Navbar } from './Components';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Mouse />
    <Section title="What is a mouse test?" desc="A mouse test is meant to test the device for problems like double click and rabbies, it also works on solar power and drugs" />
        <Section title="What are we here?" desc="Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer," />
    <Footer />
  </StrictMode>,
)
