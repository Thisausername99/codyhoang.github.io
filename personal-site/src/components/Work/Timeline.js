import React from "react"
import internOne from "../../images/bevoo.png"
import arduiNo from "../../images/arduino.png"
import trellis from "../../images/trellis.png"
import fpt from "../../images/fpt-software-logo.png"
import styles from "./_timeline.module.scss"



class Work extends React.Component {
  render () {
    return (
      <div className={styles.timeline_content}>
      <h1 className={styles.for_h1}>Timeline</h1>
      <ul className={styles.timeline}>
        <li className={styles.event} data-date="June - Present 2020" >
          <h3>FPT software internship
          <a href="https://www.fpt-software.com/" > <img src = {fpt} alt="" style={{ display:"block", width:"20%", paddingTop:"10px"}}/> </a>
          </h3>
          <ul>
            <li> Improved development skills through build a simple website with ExpressJS and deploy using CI/CD tools and Docker.</li>
            <li> Learned about system architect and the process of software deployment.</li>
          </ul>
        </li>

        <li className={styles.event} data-date="Jan - May 2020">
          <h3>Trellis
          <img src={trellis} alt="" style={{ display:"block", width:"20%", paddingTop:"10px"}}/>
          </h3>
          <h4>
              Umass Amherst, MA, USA 01002
          </h4>
          <ul>
            <li><a href="https://github.com/david-fisher/320-S20-Track2">GitHub</a></li>
            <li>Developed a software that assists students from 5 colleges in booking appointment inspired by HandShake.</li>
            <li>Designed and maintain API gateway integrating with front-end and database powered by AWS EC2.</li>
          </ul>

        </li>

        <li className={styles.event} id="date" data-date="Sep - Dec 2019">
          <h3>HandTilt 3000
          <img src={arduiNo} alt="" style={{ display:"block", width:"20%", paddingTop:"10px"}}/>
          </h3>
          <h4>
              Umass Amherst, MA, USA 01002
          </h4>
          <ul>
            <li><a href="https://sites.google.com/umass.edu/gaming-with-gesture/">Project Site</a></li>
            <li>Final project for CICS 290M - An physical computation intro course about fundamental of electronics and their applications.</li>
            <li>Reformed classic arcade games with revamped motion controller utilizing motion sensor (MPU 6050) on Arduino.</li>
          </ul>
        </li>


        <li className={styles.event} data-date="June - August 2019">
          <h3>Bevootech internship
          <a href="https://bevootech.com/"> <img src={internOne} alt ="website" style={{ display:"block", width:"20%", paddingTop:"10px"}}/> </a>
          </h3>
          <h4>
              Bevootech PTE LTD, Singapore 349314
          </h4>
          <ul>
            <li>Developed UI friendly chat bot scripts generator using MEAN stack.</li>
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