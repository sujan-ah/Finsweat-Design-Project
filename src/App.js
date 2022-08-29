import './App.css';
import Banner from './component/banner/Banner';
import Client from './component/client/Client';
import Design from './component/design/Design';
import Faq from './component/faq/Faq';
import Navbar from './component/navbar/Navbar';
import Project from './component/project/Project';
import Work from './component/work/Work';



function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Work/>
      <Project/>
      <Design/>
      <Client/>
      <Faq/>
    </>
  )
}

export default App;
