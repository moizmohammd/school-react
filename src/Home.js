import Feedback from './Feedback'
import Footer from './Footer'
import Form from './Form'
import Homepage from './Homepage'
import Navbar from './Navbar/Navbar'
import Slider from './Slider'
import Words from './Words'

function Home(){

    return(

        <>
        <Homepage></Homepage>
        <br></br>
        <br></br>
        <Navbar></Navbar>
       <Slider></Slider>
        <br></br>
        <br></br>
        <Words></Words>
        <br></br>
        <br></br>
        <Feedback></Feedback>
        <Form></Form>
        <br></br>
        <br></br>
        <Footer></Footer>
        </>
    )
}

export default Home;