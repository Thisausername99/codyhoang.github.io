import beevo from "../../images/bevoo.png"
import fpt from "../../images/fpt-software-logo.png"

import React from 'react'
import StarIcon from '@material-ui/icons/Star'

import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
// import  style from './_timeline.module.scss'


class Work extends React.Component {
  render () {
    return (
//       // <div className={styles.timeline_content}>
//       // <h1 className={styles.for_h1}>Timeline</h1>
//       // <ul className={styles.timeline}>
//       //   <li className={styles.event} data-date="June - Present 2020" >
//       //     <h3>FPT software internship
//       //     <a href="https://www.fpt-software.com/" > <img src = {fpt} alt="" style={{ display:"block", width:"20%", paddingTop:"10px"}}/> </a>
//       //     </h3>
//       //     <ul>
//       //       <li> Builded a simple website with ExpressJS and deployed using CI/CD tools and Docker.</li>
//       //       <li> Learned about system architect and the process of software deployment.</li>
//       //     </ul>
//       //   </li>

//       //   <li className={styles.event} data-date="Jan - May 2020">
//       //     <h3>Trellis
//       //     <img src={trellis} alt="" style={{ display:"block", width:"20%", paddingTop:"10px"}}/>
//       //     </h3>
//       //     <h4>
//       //         Umass Amherst, MA, USA 01002
//       //     </h4>
//       //     <ul>
//       //       <li><a href="https://github.com/david-fisher/320-S20-Track2">GitHub</a></li>
//       //       <li>Developed a software that assists students from 5 colleges in booking appointment inspired by HandShake.</li>
//       //       <li>Designed and maintain API gateway integrating with front-end and database powered by AWS EC2.</li>
//       //     </ul>

//       //   </li>

//       //   <li className={styles.event} id="date" data-date="Sep - Dec 2019">
//       //     <h3>HandTilt 3000
//       //     <img src={arduiNo} alt="" style={{ display:"block", width:"20%", paddingTop:"10px"}}/>
//       //     </h3>
//       //     <h4>
//       //         Umass Amherst, MA, USA 01002
//       //     </h4>
//       //     <ul>
//       //       <li><a href="https://sites.google.com/umass.edu/gaming-with-gesture/">Project Site</a></li>
//       //       <li>Final project for CICS 290M - An physical computation intro course about fundamental of electronics and their applications.</li>
//       //       <li>Reformed classic arcade games with revamped motion controller utilizing motion sensor (MPU 6050) on Arduino.</li>
//       //     </ul>
//       //   </li>


//       //   <li className={styles.event} data-date="June - August 2019">
//       //     <h3>Bevootech internship
//       //     <a href="https://bevootech.com/"> <img src={internOne} alt ="website" style={{ display:"block", width:"20%", paddingTop:"10px"}}/> </a>
//       //     </h3>
//       //     <h4>
//       //         Bevootech PTE LTD, Singapore 349314
//       //     </h4>
//       //     <ul>
//       //       <li>Developed UI friendly chat bot scripts generator using MEAN stack.</li>
//       //       <li>Developed website information scraper tools for specific needs.</li>
//       //       <li>Customized Facebook chat bot utilizing DiaglogFlow for medical clinics, hospital.</li>
//       //     </ul>
//       //   </li>


//       // </ul>
      <div>
      <h1 className="h1_style">Timeline</h1>
      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(123,104,238)', color: '#fff' }}
          date="May - Current 2020"
          iconStyle={{ background: 'rgb(189,183,107)', color: '#fff' }}
          icon={<WorkIcon />}
          >  <a href="https://www.fpt-software.com/">FPT SOFTWARE
          <img src={fpt} alt="" className="logoImage"/>
          </a>
          <h2 className="vertical-timeline-element-title">Software Engineer Intern</h2>
          <h3 className="vertical-timeline-element-subtitle">Ho Chi Minh, VietNam</h3>
          <ul>
            <li> Builded a simple website with ExpressJS and deployed with CI/CD tools and Docker.</li>
            <li> Learned about system architect with backend development.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(123,104,238)', color: '#fff' }}
          // contentArrowStyle={{ borderRight: '6px solid  rgb(33, 150, 243)' }}
          date="June - August 2018"
          iconStyle={{ background: 'rgb(189,183,107)', color: '#fff' }}
          icon={<WorkIcon/>}
        >
          {/* <FontAwesomeIcon icon={faHome} /> */}
          <a href="https://bevootech.com/">BEVOOTECH
          <img src={beevo} alt="" className="logoImage"/>
          </a>
          <h2 className="vertical-timeline-element-title">R&D Developer Intern </h2>
          <h3 className="vertical-timeline-element-subtitle">Singapore, Singapore</h3>
            <ul>
              <li>Developed UI friendly chat bot scripts generator using MEAN stack.</li>
              <li>Developed website information scraper tools for specific needs.</li>
              <li>Customized Facebook chat bot utilizing DiaglogFlow for medical clinics, hospital.</li>
            </ul>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(119,136,153)', color: '#fff' }}
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon/>}
        >
        <h3>To be continue</h3>
        </VerticalTimelineElement> */}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(220,20,60)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
      </div>
    )
  }
}

export default Work


