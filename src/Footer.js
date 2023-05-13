import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer(){

    return(

        <>
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2663076038325!2d78.44689329678958!3d17.39900289999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb976d0aae1f85%3A0x81cb7deb3c879753!2sPrerna%20High%20School!5e0!3m2!1sen!2sin!4v1683279820999!5m2!1sen!2sin" width="100%" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="myframe"
      
      allowFullScreen=""
    ></iframe>
  </div>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Contact Us</h4>
                        <h6> Prerrna School</h6>
                        <h6>+91 9177992374</h6>
                        <h6>prerrna@yahoo.com</h6>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Follow us on</h4>
                        <div className="socialmedia">
                        <FontAwesomeIcon size='3x' icon="fa-brands fa-facebook" /> &nbsp; &nbsp;
                        <FontAwesomeIcon size='3x' icon="fa-brands fa-instagram" />

                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className='sb__footer-below'>
                    <div className='sb__footer-copyright'>
                        <p>@{new Date().getFullYear}.All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
export default Footer;