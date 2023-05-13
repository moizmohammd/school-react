import './Form.css'
 function Form() {
  return (
    <><div id="contact">
    <div className="container">
      <div className="row">
        <div className="contact-left">
          <h1>School</h1>
          <center>
            <img src="logo.png" alt="" />
          </center>
        </div>
        <div className="contact-right">
          <h1>ENQUIRE NOW</h1>
          <form>
            <label htmlFor="student-name">Student Name:</label>
            <input type="text" id="student-name" name="student-name" />
            <label htmlFor="father-name">Father Name:</label>
            <input type="text" id="father-name" name="father-name" />
            <br />
            <br />
            <label htmlFor="age" style={{float:'left'}}>Age:</label>
            <input type="date" id="age" name="age" />
            <br />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <br />
            <br />
            <label htmlFor="mobile-number">Mobile Number:</label>
            <input type="tel" id="mobile-number" name="mobile-number" />
            <br />
            <br />
            <label htmlFor="present-grade">Class:</label>
            <input type="text" id="present-grade" name="present-grade" />
            <br></br>
            <br></br>
            <input type="submit" defaultValue="Submit" />
          </form>
          <span id="msg" />
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
export default Form;