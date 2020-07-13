import React from "react"
import internOne from "../../images/bevoo.png"
import arduiNo from "../../images/arduino.png"
import styles from "./_timeline.module.scss"



class Work extends React.Component {
  render () {
    const mystyle = {
      display: "block",
      width:"20%",
      padding:"20px"
    }

    return (
      <div className={styles.timeline_content}>
      <h1 className={styles.for_h1}>Timeline</h1>
      <ul className={styles.timeline}>
        <li className={styles.event} data-date="65Mill" >
          {/* <img src = {internOne}/> */}
          <h3>software internship</h3>
          <p>RAWWWWWWRRR</p>
        </li>

        <li className={styles.event} data-date="November 15, 2018">
          <h3>Trellis</h3>

          <p>"We design and build from scratch!"</p>
          <p>When we say <em><strong>100% custom</strong></em> we mean it— and we build all sites on the Squarespace Developer platform.</p>
          <p>Did you know that all of our pixels are hand-forged from the rarest of subpixels grown and harvested in the <em>Nerd Forest</em></p>
          <p><strong>Our success can be measured by lives and brands enhanced by 9+ years of 100% Squarespace-focused service!</strong></p>
          {/* <p><a href="https://www.squareflair.com">squareflair.com</a></p> */}
        </li>

        <li className={styles.event} id="date" data-date="Sep - Dec 2019">
          <h3>HandTilt 3000
          <img src = {arduiNo} style={{ display:"block", width:"20%", paddingTop:"10px"}}/>
          </h3>
          <ul>
            <li>Final project for CICS 290M.</li>
            <li>Reformed classic arcade games with revamped motion controller utilizing motion sensor (MPU 6050) on Arduino.</li>
          </ul>
        </li>


        <li className={styles.event} data-date="June - August 2019">
          <h3>Bevootech internship
          <a href="https://bevootech.com/"><img src = {internOne} href="https://bevootech.com/" style={{ display:"block", width:"20%", paddingTop:"10px"}}/></a>
          </h3>
          <h4>
              Bevootech PTE LTD, Singapore 349314
          </h4>
          <ul>
            <li>Developed UI friendly chat bot scripts generator using MEAN stack</li>
            <li>Developed website information scraper tools for specific needs.</li>
            <li>Customized Facebook chat bot utilizing DiaglogFlow for medical clinics, hospital.</li>
          </ul>
        </li>


      </ul>
      </div>
    )
  }
}

export default Work