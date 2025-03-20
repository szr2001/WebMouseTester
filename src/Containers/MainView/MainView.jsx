import './Mainview.css'
import { Footer, Navbar} from '../../Components';
import { MouseTesterPage} from '../../Containers';

function MainView() {
  return (
      <>
        <Navbar />
        <MouseTesterPage />
        <Footer />
      </>
  );
}

export default MainView;