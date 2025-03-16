import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MouseTester } from './Containers';
import { Footer, Mouse, Section, Navbar } from './Components';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Mouse />
        <Section title="What is a mouse test?" desc={["A mouse test is meant to test the device for problems like double click and rabies. It also works on solar power and drugs.", "It's also the thing you hold in your hand right now :D "]}/>
        <Section title="Why are we here?" desc="Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer," />
    <Footer />
  </StrictMode>,
)
