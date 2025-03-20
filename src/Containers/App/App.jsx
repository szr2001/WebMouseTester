import './App.css'
import { MouseTesterPage } from '../../Containers';
import { Footer, Navbar, PhoneWarning } from '../../Components';


const MainView = () => {
    return (
        <>
        <Navbar />
        <MouseTesterPage />
        <Footer />
        </>
    );
}

function App() {
    return (
        window.innerWidth > 600 && window.innerHeight > 600 ? <MainView /> : <PhoneWarning />
    );
}

export default App;