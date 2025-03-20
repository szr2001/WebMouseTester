import './Mainview.css'
import { Footer, Navbar} from '../../Components';
import { MouseTesterPage} from '../../Containers';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function MainView() {
    return (
        <BrowserRouter>
            <Navbar />
                <Routes>
                <Route path="/WebMouseTester/" element={<MouseTesterPage />} />
                {/*add more Paths & Pages, you can also nest the route component for like /User/Login */}
                </Routes>
            <Footer />
      </BrowserRouter>
  );
}

export default MainView;