import './Words.css'
import steve from './steve.jpeg'
import dumbledore from './dumbledore.jpeg'
function Words(){

    return(
     <>
          <h3>Words Of Empowerment</h3>
          <div className='director'>
          <img src={steve} alt='error' className='steve'></img>
            <div className='flex-message'>
            <p>"Your hard work and dedication will not go unnoticed, and I am here to support you every step of the way.
            Believe in yourself and your abilities, and know that you have the power to make a positive impact on our school community."
            </p>
          </div>
          </div>
          <br></br>
            <br></br>
            <h5>Principal's Message</h5>
            <img src={dumbledore} className='steve' alt='error'></img>
            <div className='flex-message'>
                <p>"Remember, you have the power to make a difference in the world around you.
                    Keep striving for excellence and never give up on your dreams."
                    </p>
            </div>
            </>
    )
}
export default Words;