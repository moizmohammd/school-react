import { Carousel } from 'react-bootstrap';
import './Feedback.css';
 function Feedback() {
  return (
    <>
    <section>
    <h2>What Parent's Say About Our School?</h2>
   <Carousel>
      <Carousel.Item>
        <div className="carousel-caption">
        <img src="https://i.imgur.com/lE89Aey.jpg" alt=''/>
          <div id="image-caption">Nick Doe</div>
          <p>
            If Shai Reznik's TDD videos don't convince you to add automated
            testing your code, I don't know what will.This was the very best
            explanation of frameworks for beginners that I've ever seen.
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-caption">
        <img src="https://i.imgur.com/QptVdsp.jpg" alt='' className="img-fluid" />
          <div id="image-caption">Cromption Greves</div>
          <p>
            If Shai Reznik's TDD videos don't convince you to add automated
            testing your code, I don't know what will.This was the very best
            explanation of frameworks for beginners that I've ever seen.
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-caption">
        <img src="https://i.imgur.com/jQWThIn.jpg" alt='' className="img-fluid" />
          <div id="image-caption">Harry Mon</div>
          <p>
            If Shai Reznik's TDD videos don't convince you to add automated
            testing your code, I don't know what will.This was the very best
            explanation of frameworks for beginners that I've ever seen.
          </p>
        </div>
      </Carousel.Item>
    </Carousel>
​</section>
    </>
  )
}
export default Feedback