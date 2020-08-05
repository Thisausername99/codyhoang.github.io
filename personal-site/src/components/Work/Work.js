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
      <div>
      <h1 className="h1_style">Timeline</h1>
      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)', color: '#fff' }}
          date="May - Current 2020"
          iconStyle={{ background: 'linear-gradient(to top, #ff0844 0%, #ffb199 100%)', color: '#fff' }}
          icon={<WorkIcon />}
          >FPT SOFTWARE
          <img src={fpt} alt="" className="logoImage"/>
          <h3 className="vertical-timeline-element-title">SWE Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Ho Chi Minh, VietNam</h4>
          <ul>
            <li> Builded a simple website with ExpressJS and deployed with CI/CD tools and Docker.</li>
            <li> Learned about system architect with backend development.</li>
          </ul>
        </VerticalTimelineElement>
        background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)', color: '#fff' }}
          // contentArrowStyle={{ borderRight: '6px solid  rgb(33, 150, 243)' }}
          date="June - August 2018"
          iconStyle={{ background: 'linear-gradient(to top, #ff0844 0%, #ffb199 100%)', color: '#fff' }}
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
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(119,136,153)', color: '#fff' }}
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon/>}
        >
        <h3>To be continue</h3>
        </VerticalTimelineElement> */}
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
// background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);