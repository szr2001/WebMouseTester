import './App.css'
import { MainView } from '../../Containers';
import { PhoneWarning } from '../../Components';

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

function App() {
    return isMobile ? <PhoneWarning /> : <MainView />
}

export default App;