import beevo from '../../images/bevoo.png'
import fpt from '../../images/fpt-software-logo.png'
import cics from '../../images/cics.jpg'

import React from 'react'
import StarIcon from '@material-ui/icons/Star'

import SchoolIcon from '@material-ui/icons/School'

import WorkIcon from '@material-ui/icons/Work'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'


class Work extends React.Component {
  render () {
    return (
      <div>
      <h1 className="h1_style">Timeline</h1>
      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)', color: '#fff' }}
          // contentArrowStyle={{ borderRight: '6px solid  rgb(33, 150, 243)' }}
          date="Sep - Dec 2020"
          iconStyle={{ background: 'linear-gradient(to top, #f43b47 0%, #453a94 100%)', color: '#fff' }}
          icon={<SchoolIcon/>}
        >UMASS CICS
          <img src={cics} href="https://bevootech.com/" alt="" className="logoImage"/>
          <h3 className="vertical-timeline-element-title">Course Assistant </h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <ul>
              <li>Responsible for assignments grading and response to course’s public forum.</li>
              <li>Held weekly office hours to help students with their assignments and answer queries.</li>
            </ul>
        </VerticalTimelineElement>

      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)', color: '#fff' }}
          date="May - Nov 2020"
          iconStyle={{ background: 'linear-gradient(to top, #f43b47 0%, #453a94 100%)', color: '#fff' }}
          icon={<WorkIcon />}
          >FPT SOFTWARE
          <img src={fpt} alt="" className="logoImage"/>
          <h3 className="vertical-timeline-element-title">SWE Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Ho Chi Minh, VietNam</h4>
          <ul>
            <li> Customized user registration and login pages using Docker containers for node environment and mysql with Jenkins for automation.</li>
            <li> Built an IP subnet calculator with Angular.</li>
            <li> Learned Docker service along with Jenkins for CI/CD development. </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)', color: '#fff' }}
          // contentArrowStyle={{ borderRight: '6px solid  rgb(33, 150, 243)' }}
          date="June - Aug 2018"
          iconStyle={{ background: 'linear-gradient(to top, #f43b47 0%, #453a94 100%)', color: '#fff' }}
          icon={<WorkIcon/>}
        >BEVOOTECH
          <img src={beevo} href="https://bevootech.com/" alt="" className="logoImage"/>
          <h3 className="vertical-timeline-element-title">R&D Developer Intern </h3>
          <h4 className="vertical-timeline-element-subtitle">Singapore, Singapore</h4>
            <ul>
              <li>Developed UI friendly chat bot scripts generator using MEAN stack.</li>
              <li>Developed website information scraper tools for specific needs.</li>
              <li>Customized Facebook chat bot utilizing DiaglogFlow for medical clinics, hospital.</li>
            </ul>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          iconStyle={{ background: 'linear-gradient(to right, #f83600 0%, #f9d423 100%)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
      </div>
    )
  }
}
export default Work
