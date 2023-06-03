import Firstnavbar from "./components/firstnavbars/Firstnavbar";
import Secondnavbar from "./components/secondnavbar/Secondnavbar";
import MainContent from "./MainContent/MainContent";
import SubContent from "./SubContent/SubContent";
import Footer from "./components/Footer/Footer";
import Aboutus from "./pages/aboutus/Aboutus";

function App() {
  return (
       <nav>
      <Aboutus/>
   <Secondnavbar/>
    <Firstnavbar/>
    <MainContent/>
    <SubContent/>
     <Footer/>
    </nav>

  );
}

export default App;
