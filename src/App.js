import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Slider';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Homepage from './Homepage';
import Words from './Words';
 import Feedback from './Feedback'
import Form from './Form';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
// import Layout from './Navbar/Layout';
import OurSchool from './About_Us/OurSchool';
import Mission from './About_Us/Mission';
import Director from './About_Us/Director';
import Principal from './About_Us/Principal';
import Gallery from './Gallery';
import News from './News';
import Admissions from './Admissions';
import Transportation from './Facilities/Transportation';
import Innovation from './Facilities/Innovation';
// import Home from './Home';
function App() {
  return (
    <div className="App">
      <Homepage></Homepage> 
      <br></br>
       <Navbar></Navbar>
      <Routes>  
       {/* <Route path='/' element={<Layout></Layout>}></Route> */}
        <Route path='ourschool' element={<OurSchool></OurSchool>}></Route>
        <Route path='mission' element={<Mission></Mission>}></Route>
        <Route path='director' element={<Director></Director>}></Route>
        <Route path='principal' element={<Principal></Principal>}></Route>
        <Route path='gallery' element={<Gallery></Gallery>}></Route>
        <Route path='admissions' element={<Admissions></Admissions>}></Route>
        <Route path='news' element={<News></News>}></Route>
        <Route path='transportation' element={<Transportation></Transportation>}></Route>
        <Route path='innovation' element={<Innovation></Innovation>}></Route>
        </Routes>
      {/* <Home></Home> */}
      <Slider></Slider>
      <br></br>
      <br></br>
      <br></br>
      <Words></Words>
      <br></br>
      <br></br>
      <Feedback></Feedback> 
      <Form></Form>
      <br></br>
      <Footer></Footer>
    </div>
  );
}

export default App;

